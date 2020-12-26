from flask import Flask, jsonify, request
from flask_cors import CORS
from subprocess import Popen
import os

control = Flask(__name__)
CORS(control)

checkRun = 0
subproc = Popen
def openSubprocess(number):
    global subproc
    if number == 0:
        subproc = Popen(['python', 'server.py'])
    if number == 1:
        subproc.terminate()

@control.route('/api/start', methods=['GET'])
def start():
    global checkRun
    checkRun = 1
    openSubprocess(0)
    return "Start"

@control.route('/api/stop', methods=['GET'])
def stop():
    global checkRun
    checkRun == 0
    openSubprocess(1)
    return "Stop"

@control.route('/api/restart', methods=['GET'])
def restart():
    global checkRun
    os.system("python train.py")
    if checkRun == 1:
        openSubprocess(1)
        openSubprocess(0)
    return "Restart"

if __name__ == '__main__':
    control.run(host='localhost', port=9000, debug=True)
