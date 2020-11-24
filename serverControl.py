from flask import Flask, jsonify, request
from flask_cors import CORS
from subprocess import Popen
import os

control = Flask(__name__)
CORS(control)

checkRun = 0
subproc = Popen

@control.route('/api/start', methods=['GET'])
def start():
    global subproc
    global checkRun
    checkRun = 1
    subproc = Popen(['python', 'server.py'])
    return "Start"

@control.route('/api/stop', methods=['GET'])
def stop():
    global subproc
    global checkRun
    checkRun == 0
    subproc.terminate()
    return "Stop"

@control.route('/api/restart', methods=['GET'])
def restart():
    global checkRun
    os.system("python train.py")
    if checkRun == 1:
        global subproc
        stop()
        start()
    return "Restart"

if __name__ == '__main__':
    control.run(host='localhost', port=9000, debug=True)
