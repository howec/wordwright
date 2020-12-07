from server.app import app
# from server.api.v1.api import api
from flask import Flask
from flask_restful import Api
import sys
from server.controllers.room_tracker import *

# app.register_blueprint(api.blueprint, url_prefix='/api/v1')

# Initialize RoomTracker
# print("Initializing RoomTracker")
# room_tracker = init_room_tracker()
