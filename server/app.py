from flask_sqlalchemy import SQLAlchemy
from flask import Flask, jsonify
from flask_dotenv import DotEnv
from server.controllers.room_tracker import init_room_tracker
from server.controllers.cron import cron_job
import os

print("Initializing Backend")
app = Flask(__name__, static_folder='build')

env = DotEnv(app)
env.init_app(app, env_file="./.env", verbose_mode=True)

# For heroku launching
if "DATABASE_URL" in os.environ:
    app.config["SQLALCHEMY_DATABASE_URI"] = os.environ["DATABASE_URL"]

if "REACT_APP_SITEURL" in os.environ:
    app.config["REACT_APP_SITEURL"] = os.environ["REACT_APP_SITEURL"]
    
# Database
db = SQLAlchemy(app)

if app.config["DEBUG"]:
    app.debug = True
else:
    app.debug = False

# Routes for heroku push
@app.route('/')
def root():
    print('here')
    return app.send_static_file('index.html')

@app.route('/wrightpage') 
def wrightpage():
    # GET USERSELECTION FROM FRONTEND
    source = "USERSELECTION"
    # no_writers = Room.
    prompt = createPrompt(source, no_writers)
    # make into two different functions/paths??
    wordbank = createWordbank(source,no_writers)
    return jsonify([prompt,wordbank])
    
# [] Eventually move to API Dev 
@app.route('/create-room/<room_id>')
def create_room(room_id):
    print(room_id)
    t = {'room_id': room_id}
    return jsonify(t)

@app.route('/story-time)
def story_time():
    create_room()
    # create_room
    #    add id to a list of active rooms
    #    get room id
    # return room_id
    # 
    print(room_id)
    t = {'room_id': room_id}
    return jsonify(t)

@app.route('/<path:path>')
def static_proxy(path):
    """
    First we attempt to see if a static file exists, otherwise we let the react
    client do the routing.
    """
    try:
        return app.send_static_file(path)
    except:
        return app.send_static_file('index.html')

