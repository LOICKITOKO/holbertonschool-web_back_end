#!/usr/bin/env python3
"""
This script provides statistics about Nginx logs stored in MongoDB.
"""

from pymongo import MongoClient
from typing import Dict, List

def get_nginx_log_stats(mongo_collection) -> None:
    """
    Fetch and print statistics about the Nginx logs.

    Args:
        mongo_collection: The pymongo collection object.
    """
    # Count the total number of documents in the collection
    total_logs = mongo_collection.count_documents({})
    print(f"{total_logs} logs")

    # Count the number of documents for each HTTP method
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    print("Methods:")
    for method in methods:
        count = mongo_collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    # Count the number of documents with method=GET and path=/status
    status_check = mongo_collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{status_check} status check")

if __name__ == "__main__":
    # Connect to MongoDB
    client = MongoClient('mongodb://127.0.0.1:27017')
    db = client.logs
    collection = db.nginx

    # Get and print log stats
    get_nginx_log_stats(collection)
