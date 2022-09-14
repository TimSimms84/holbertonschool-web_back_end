#!/usr/bin/env python3
"""
0x02 personal data
"""
import re
import logging
from typing import List
import os
import mysql.connector
PII_FIELDS = ('name', 'email', 'phone', 'ssn', 'password')
""" tuple PII_FIELDS constant at the root of the module containing the
fields from user_data.csv that are considered PII."""


class RedactingFormatter(logging.Formatter):
    """ Redacting Formatter class
    """

    REDACTION = "***"
    FORMAT = "[HOLBERTON] %(name)s %(levelname)s %(asctime)-15s: %(message)s"
    SEPARATOR = ";"

    def __init__(self, fields: List[str]):
        """
        init method
        """
        super(RedactingFormatter, self).__init__(self.FORMAT)
        self.fields = fields

    def format(self, record: logging.LogRecord) -> str:
        """
         filter values in incoming log records using filter_datum.
         Values for fields in fields should be filtered.
        """
        return filter_datum(self.fields, self.REDACTION,
                            super().format(record), self.SEPARATOR)


def filter_datum(fields: List[str],
                 redaction: str,
                 message: str,
                 separator: str) -> str:
    """
    Write a function called filter_datum that returns the log message
    obfuscated:
    Arguments:
    fields: a list of strings representing all fields to obfuscate
    redaction: a string representing by what the field will be obfuscated
    message: a string representing the log line
    separator: a string representing by which character is separating all
    fields in the log line (message) The function should use a regex
    to replace occurrences of certain field values.
    filter_datum should be less than 5 lines long and use
    re.sub to perform the substitution with a single regex.
    """
    for elem in fields:
        message = re.sub(f'{elem}=.+?{separator}',
                         f'{elem}={redaction}{separator}', message)
    return message


def get_logger() -> logging.Logger:
    """
    function that takes no arguments and returns a logging.Logger object.
    """
    logger = logging.getLogger("user_data")
    logger.setLevel(logging.INFO)
    logger.propagate = False
    stream_handler = logging.StreamHandler()
    stream_handler.setFormatter(RedactingFormatter(list(PII_FIELDS)))
    logger.addHandler(stream_handler)
    return logger


def get_db() -> mysql.connector.connection.MySQLConnection:
    """ returns a connector to the database """
    return mysql.connector.connect(
                    host=os.environ.get('PERSONAL_DATA_DB_HOST', 'localhost'),
                    database=os.environ.get('PERSONAL_DATA_DB_NAME', 'root'),
                    user=os.environ.get('PERSONAL_DATA_DB_USERNAME'),
                    password=os.environ.get('PERSONAL_DATA_DB_PASSWORD', ''))
