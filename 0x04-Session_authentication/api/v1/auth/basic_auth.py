#!/usr/bin/env python3
"""
Basic Authenication
"""
from api.v1.auth.auth import Auth, TypeVar
from typing import Tuple
from base64 import b64decode
from models.user import User


class BasicAuth(Auth):
    """ BasicAuth class """

    def extract_base64_authorization_header(self,
                                            authorization_header: str) -> str:
        """
        Return None if authorization_header is None
        Return None if authorization_header is not a string
        Return None if authorization_header doesn’t start by Basic
        (with a space at the end)
        Otherwise, return the value after Basic (after the space)
        You can assume authorization_header contains only one Basic
        """
        if authorization_header is None or\
                not isinstance(authorization_header, str):
            return None
        if not authorization_header.startswith("Basic "):
            return None
        base = authorization_header.split(' ')
        return base[1]

    def extract_user_credentials(self,
                                 decoded_base64_authorization_header: str
                                 ) -> Tuple[str, str]:
        """
        Return None, None if decoded_base64_au... is None
        Return None, None if decoded_base64_au... is not a string
        Return None, None if decoded_base64_au... doesn’t contain :
        Otherwise, return the user email and the user password - these 2
        values must be separated by a :
        You can assume decoded_base64_authorization_header will
        contain only one :
        """
        if decoded_base64_authorization_header is None or\
                not isinstance(decoded_base64_authorization_header, str):
            return None, None
        if ':' not in decoded_base64_authorization_header:
            return None, None
        credentials = decoded_base64_authorization_header.split(':')
        return credentials[0], credentials[1]

    def decode_base64_authorization_header(self,
                                           base64_authorization_header: str
                                           ) -> str:
        """
        Return None if base64_authorization_header is None
        Return None if base64_authorization_header is not a string
        Return None if base64_authorization_header is not a valid Base64 -
        you can use try/except
        Otherwise, return the decoded value as UTF8 string
        """
        if base64_authorization_header is None\
                or not isinstance(base64_authorization_header, str):
            return None
        try:
            baseEncode = base64_authorization_header.encode('utf-8')
            baseDecode = b64decode(baseEncode)
            return baseDecode.decode('utf-8')
        except Exception:
            return None

    def extract_user_credentials(self,
                                 decoded_base64_authorization_header:
                                 str) -> Tuple[str, str]:
        """
        Return None, None if decoded_base64_autho... is None
        Return None, None if decoded_base64_autho... is not a string
        Return None, None if decoded_base64_autho... doesn’t contain :
        Otherwise, return the user email and the user password - these 2
        values must be separated by a :
        You can assume decoded_base64_authorization_header will
        contain only one :
        """
        if decoded_base64_authorization_header is None\
                or not isinstance(decoded_base64_authorization_header, str):
            return None, None
        if ':' not in decoded_base64_authorization_header:
            return None, None
        credentials = decoded_base64_authorization_header.split(':')
        return credentials[0], credentials[1]

    def user_object_from_credentials(self,
                                     user_email: str, user_pwd:
                                     str) -> TypeVar('User'):
        """
        Return None if user_email is None or not a string
        Return None if user_pwd is None or not a string
        Return None if your database (file) doesn’t contain any User
        instance with email equal to user_email - you should use the clas
        method search of the User to lookup the list of users based on their
        email. Don’t forget to test all cases: “what if there is no user in DB?
        Return None if user_pwd is not the password of the User instance found
        - you must use the method is_valid_password of User
        Otherwise, return the User instance
        """
        if user_email is None or not isinstance(user_email, str):
            return None
        if user_pwd is None or not isinstance(user_pwd, str):
            return None
        try:
            users = User.search({'email': user_email})
            for user in users:
                if user.is_valid_password(user_pwd):
                    return user
        except Exception:
            return None

    def current_user(self, request=None) -> TypeVar('User'):
        """
        You must use authorization_header
        You must use extract_base64_authorization_header
        You must use decode_base64_authorization_header
        You must use extract_user_credentials
        You must use user_object_from_credentials
        """
        try:
            header = self.authorization_header(request)
            base64Header = self.extract_base64_authorization_header(header)
            decodeValue = self.decode_base64_authorization_header(base64Header)
            credentials = self.extract_user_credentials(decodeValue)
            return self.user_object_from_credentials(credentials[0],
                                                     credentials[1])
        except Exception:
            return None
