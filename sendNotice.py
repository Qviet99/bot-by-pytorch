import requests
import json

def sendNotice(data):
    url = "http://localhost:8080/save-nonAnswer"

    payload={"question": data, "timeReport":"01:01:00 12-02-2020"}
    headers = {
    'Content-Type': 'application/json'
    }

    response = requests.post( url, headers=headers, data=json.dumps(payload))

    return(response.text)
