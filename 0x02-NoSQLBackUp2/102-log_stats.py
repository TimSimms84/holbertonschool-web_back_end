#!/usr/bin/env python3
"""Log stats with the top 10 most present IPs in the nginx logs"""


if __name__ == "__main__":
    from pymongo import MongoClient
    client = MongoClient() # defaults to localhost:27017
    collection = client.logs.nginx # collection nginx in database logs

    print("{} logs".format(collection.count_documents({}))) # count all documents
    print("Methods:") 
    method_list = ["GET", "POST", "PUT", "PATCH", "DELETE"] # list of methods
    for method in method_list: 
        print("\tmethod {}: {}".format(method, collection.count_documents({"method": method}))) # count documents with method
    print("{} status check".format(collection.count_documents({"path": "/status"}))) # count documents with path /status
    print("IPs:")
    ip_list = collection.aggregate([{"$group": {"_id": "$ip", "count": {"$sum": 1}}}, {"$sort": {"count": -1}}, {"$limit": 10}]) # list of top 10 IPs
    for ip in ip_list:
        print("\t{}: {}".format(ip.get("_id"), ip.get("count")))
        
