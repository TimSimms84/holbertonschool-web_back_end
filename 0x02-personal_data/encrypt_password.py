#!/usr/bin/env python3
"""
function that expects one string argument name password
and returns a salted, hashed password, which is a byte string.
"""
import bcrypt


def hash_password(password: str) -> bytes:
    """ function that expects one string argument name
    password and returns a salted, hashed password, which is a byte string """
    return bcrypt.hashpw(password.encode(), bcrypt.gensalt())


def is_valid(hashed_password: bytes, password: str) -> bool:
    """ Implement an is_valid function that expects 2 arguments and
    returns a boolean """
    return bcrypt.checkpw(password.encode(), hashed_password)
