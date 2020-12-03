import requests
import json

def sendNotice(data):
    url = "http://localhost:8080/save-nonAnswer"

    payload={"question": data}
    headers = {
    'Content-Type': 'application/json'
    }

    response = requests.post( url, headers=headers, data=json.dumps(payload))

    return(response.text)
