#!/usb/bin/env python3
"""
4. Parameterize and patch as decorators

"""
from webbrowser import get
from client import GithubOrgClient

from parameterized import parameterized, parameterized_class
from unittest.mock import patch, PropertyMock
import unittest
from fixtures import TEST_PAYLOAD


class TestGithubOrgClient(unittest.TestCase):
    """
    test github org client
    """
    @parameterized.expand([
        ('google', {True}), ('abc', {False})
    ])
    @patch('client.get_json')
    def test_org(self, test_input, test_payload, mock_get):
        """
        test org
        """
        mock_get.return_value = test_payload
        test = GithubOrgClient(test_input)
        self.assertEqual(test.org, test_payload)
        mock_get.assert_called_once()

    def test_public_repos_url(self):
        """
        test public repos url
        """
        test = GithubOrgClient('google')
        with patch.object(GithubOrgClient, 'org',
                          new_callable=PropertyMock) as mock:
            mock.return_value = {'repos_url': 'google'}
            self.assertEqual(test._public_repos_url, 'google')
            mock.assert_called_once()

    @patch('client.get_json')
    def test_public_repos(self, mock_get):
        """
        test public repos
        """
        mock_get.return_value = [{'name': 'google'}]
        test = GithubOrgClient('google')
        with patch('client.GithubOrgClient._public_repos_url',
                   new_callable=PropertyMock) as mock:
            mock.return_value = 'google'
            self.assertEqual(test.public_repos(), ['google'])
            mock.assert_called_once()
            mock_get.assert_called_once()

    @parameterized.expand([
        ({"license": {"key": "my_license"}}, "my_license", True),
        ({"license": {"key": "other_license"}}, "my_license", False),
    ])
    def test_has_license(self, repo, license_key, expected):
        """
        test has license
        """
        test = GithubOrgClient('google')
        self.assertEqual(test.has_license(repo, license_key), expected)


@parameterized_class(
    ('org_payload', 'repos_payload', 'expected_repos', 'apache2_repos'),
    TEST_PAYLOAD
)
class TestIntegrationGithubOrgClient(unittest.TestCase):
    """
    test integration github org client
    """
    @classmethod
    def setUpClass(cls):
        """
        set up class
        """
        config = {'return_value.json.side_effect':
                  [
                      cls.org_payload, cls.repos_payload,
                      cls.org_payload, cls.repos_payload
                  ]
                  }
        cls.get_patcher = patch('requests.get', **config)

        cls.mock = cls.get_patcher.start()

    @classmethod
    def tearDownClass(cls):
        """
        tear down class
        """
        cls.get_patcher.stop()

    def test_public_repos(self):
        """
        intergation test public repos
        """
        test = GithubOrgClient('google')
        self.assertEqual(test.org, self.org_payload)
        self.assertEqual(test.public_repos(), self.expected_repos)
        self.mock.assert_called()

    def test_public_repos_with_license(self):
        """
        integration test public repos with license
        """
        test = GithubOrgClient('google')
        self.assertEqual(test.org, self.org_payload)
        self.assertEqual(test.public_repos('apache-2.0'),
                         self.apache2_repos)
        self.mock.assert_called()
