import requests
import json

def getJSON():
    url = "http://localhost:8080/list-tag"

    payload={}
    headers = {}

    response = requests.request("GET", url, headers=headers, data=payload)

    jsondata = response.json()

    save = {
        "intents" : jsondata
    }

    with open('intents.json', 'w', encoding='utf-8') as f:
        json.dump(save, f, ensure_ascii=False, indent=4)
    
    print("Done")

    