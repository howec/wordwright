#!/usr/bin/env python
"""
Runs the backend server
"""

from flask import Flask
from server.app import app
from server.app import socketio

app.config['SECRET_KEY'] = 'EnAbLiNg EnCrYpTiOn?!'

if __name__ == '__main__':
    socketio.run(host='0.0.0.0', port=app.config['PORT'])
