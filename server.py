from flask import Flask, jsonify, request, send_file
from flask_cors import CORS
from texttospeech import tts
from botRes import getRes

app = Flask(__name__)
CORS(app)
app.config['JSON_AS_ASCII'] = False 


@app.route('/api/bot', methods=['POST'])
def index():
    data = request.get_json()
    tts(getRes(str(data["user"])))
    return str(getRes(data["user"]))

@app.route('/api/bot/speech', methods=['POST'])
def botspeech():
    path = "C:/Users/KimAnh/Desktop/Cap1/Python_Bot_Pytorch/botspeech.wav"
    return send_file(path, mimetype="audio/wav", as_attachment=False, attachment_filename="test.wav")

if __name__ == '__main__':
    app.run(host='localhost', port=6000, debug=True)

