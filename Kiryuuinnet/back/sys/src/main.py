import json
import requests

def add_num():
    response = requests.post("http://localhost:3000/calc", json = {
        "num1": 1,
        "num2": 2
    })
    print(response.json())

add_num()