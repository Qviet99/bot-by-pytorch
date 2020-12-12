import pymysql
import json

with open('intents.json', 'r', encoding='utf-8', errors='ignore') as f:
    r = json.load(f)

mydb = pymysql.connect(host='localhost',
user='root',
passwd='123456',
db='dtubot')

cursor = mydb.cursor()
data = r["intents"]

i = 0
#print(subresults2)
while i < len(data):
    cursor.execute("INSERT INTO intents (tag, patterns, responses) VALUES (%s,%s,%s)", (data[i]["tag"],str(data[i]["patterns"]),str(data[i]["responses"])))
    i+=1

#close the connection to the database.
mydb.commit()
cursor.close()
