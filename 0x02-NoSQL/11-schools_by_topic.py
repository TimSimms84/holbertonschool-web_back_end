#!/usr/bin/evn python3
"""returns list of school having a specific topic"""


def schools_by_topic(mongo_collection, topic):
    """returns list of school having a specific topic"""
    return mongo_collection.find({"topics": topic})
