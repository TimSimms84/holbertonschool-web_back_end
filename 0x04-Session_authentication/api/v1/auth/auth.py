#!/usr/bin/env python3
""" class to manage the API authentication. """
from flask import request
from typing import List, TypeVar
from os import getenv


class Auth():
    """
    api Auth
    """
    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """
        Returns True if path is None
        Returns True if excluded_paths is None or empty
        Returns False if path is in excluded_paths
        You can assume excluded_paths contains string path always ending by a /
        This method must be slash tolerant: path=/api/v1/status and
        path=/api/v1/status/ must be returned False if excluded_paths
        contains /api/v1/status/
        """
        if not path or not excluded_paths:
            return True
        if path[-1] != '/':
            path += '/'
        if path in excluded_paths:
            return False
        return True

    def authorization_header(self, request=None) -> str:
        """
        request is None, returns None
        If request doesn’t contain the header key Authorization, returns None
        Otherwise, return the value of the header request Authorizatio
        """
        if not request:
            return None
        if not request.headers.get("Authorization"):
            return None
        return request.headers.get("Authorization")

    def current_user(self, request=None) -> TypeVar('User'):
        """
        returns None - request will be the Flask request object
        """
        return None

    def session_cookie(self, request=None):
        """
        Return None if request is None
        Return the value of the cookie named _my_session_id from request -
        the name of the cookie must be defined by the
        environment variable SESSION_NAME
        You must use .get() built-in for accessing the cookie
        in the request cookies dictionary
        You must use the environment variable SESSION_NAME to
        define the name of the cookie used for the Session ID
        """
        if not request:
            return None
        session_name = getenv('SESSION_NAME')
        return request.cookies.get(session_name)
