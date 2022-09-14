#!/usr/bin/env python3
import re
import logging
"""
0x02 personal data
"""


class RedactingFormatter(logging.Formatter):
    """ Redacting Formatter class
        """

    REDACTION = "***"
    FORMAT = "[HOLBERTON] %(name)s %(levelname)s %(asctime)-15s: %(message)s"
    SEPARATOR = ";"

    def __init__(self, fields):
        self.fields = fields
        super(RedactingFormatter, self).__init__(self.FORMAT)

    def format(self, record: logging.LogRecord) -> str:
        return filter_datum(self.fields, self.REDACTION,
                            super().format(record), self.SEPARATOR)


def filter_datum(fields, redaction, message, separator):
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
