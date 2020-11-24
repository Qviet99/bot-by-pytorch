import mysql.connector

listNum = []

mydb = mysql.connector.connect(
    host = "localhost",
    user="root",
    password="123456",
    database="chatbot"
)

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM tag")

results = mycursor.fetchall()

for row in results:
    listNum.append(row[1])


