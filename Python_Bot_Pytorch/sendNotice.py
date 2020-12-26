import requests
import json
from datetime import datetime

dt = datetime.now().strftime('%H:%M:%S %d-%m-%Y')

def sendNotice(data):
    url = "http://localhost:8080/save-nonAnswer"

    payload={"question": data, "timeReport":dt}
    headers = {
    'Content-Type': 'application/json'
    }

    response = requests.post( url, headers=headers, data=json.dumps(payload))

    print(response.text)