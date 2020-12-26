from flask import Flask, jsonify, request, send_file
from flask_cors import CORS
from botRes import getRes
import pathlib

app = Flask(__name__)
CORS(app)
app.config['JSON_AS_ASCII'] = False 


@app.route('/api/bot', methods=['POST'])
def index():
    data = request.get_json()
    return str(getRes(data["user"],data["voice"]))

@app.route('/api/bot/speech', methods=['POST'])
def botspeech():
    pth = pathlib.Path(__file__).parent.absolute()
    path = str(pth) + "/botspeech.wav"
    return send_file(path, mimetype="audio/wav", as_attachment=False, attachment_filename="test.wav")

if __name__ == '__main__':
    app.run(host='localhost', port=6000, debug=True)

