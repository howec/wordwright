from flask_sqlalchemy import SQLAlchemy
from flask import Flask
from flask_dotenv import DotEnv
from helpers import sample

import os
import torch

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
    return app.send_static_file('index.html')


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


# NLG Model delpoyment

# import NLG models
hp_model = torch.load('../stor/hp_model.pt')
got_model = torch.load('../stor/got_model.pt')
lotr_model = torch.load('../stor/lotr_model.pt')
marvel_model = torch.load('../stor/marvel_model.pt')
# connection_model = torch.load('../stor/connection_model.pt')

@app.route("/predict", methods=["GET","POST"])
def predict():
    # This is where we get the genre from the user
    #handle request here
    source = "GET from side bar"
    prompt = None

    if source == "Harry Potter":
        prompt = sample(hp_model,5)
    elif source == "Game of Thrones":
        prompt = sample(got_model,5)
    elif source == "Lord of the Rings":
        prompt == sample(lotr_model,5)
    elif source == "Marvel":
        prompt == sample(marvel_model,5)
    # elif source == "Connection":
    #     prompt == sample(connection_model,5)
    print(prompt)

    return jsonify(prompt)

