from flask import Flask, jsonify, request
from flask_cors import CORS
import cmd
import subprocess
import os
import signal

control = Flask(__name__)
CORS(control)

checkRun = 0
subproc = subprocess

@control.route('/api/start', methods=['GET'])
def start():
    global checkRun
    global subproc
    checkRun = 1
    subproc = subprocess.Popen(['python', 'server.py'])
    return "Start"

@control.route('/api/stop', methods=['GET'])
def stop():
    global checkRun
    global subproc
    checkRun == 0
    subproc.terminate()
    return "Stop"

@control.route('/api/restart', methods=['GET'])
def restart():
    global checkRun
    global subproc
    os.system("python train.py")
    if checkRun == 1:
        subproc.terminate()
        subproc = subprocess.Popen(['python', 'server.py'])
    return "Restart"

if __name__ == '__main__':
    control.run(host='localhost', port=9000, debug=True)
