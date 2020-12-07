from flask_sqlalchemy import SQLAlchemy
from flask import Flask, jsonify
from flask_dotenv import DotEnv
import os
from flask_socketio import SocketIO

from server.controllers.room_tracker import *
from server.controllers.room import *
from server.controllers.wrighter import *

print("Initializing Backend")
app = Flask(__name__, static_folder='build')

env = DotEnv(app)
env.init_app(app, env_file="./.env", verbose_mode=True)

if "REACT_APP_SITEURL" in os.environ:
    app.config["REACT_APP_SITEURL"] = os.environ["REACT_APP_SITEURL"]
    
if app.config["DEBUG"]:
    app.debug = True
else:
    app.debug = False

app.config['SECRET_KEY'] = 'EnAbLiNg EnCrYpTiOn?!'

socketio = SocketIO(app)

# Initialize RoomTracker
print("Initializing RoomTracker")
room_tracker = init_room_tracker()

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
# @app.route('/create-room/<room_id>')
# def create_room(room_id):
#     print(room_id)
#     t = {'room_id': room_id}
#     return jsonify(t)

# @app.route('/story-time')
# def story_time():
#     create_room()
    # create_room
    #    add id to a list of active rooms
    #    get room id
    # return room_id
    # 
    # print(room_id)
    # t = {'room_id': room_id}
    # return jsonify(t)



@app.route('/api/room/create', methods=['POST'])
def create_room_endpoint():
    # Create a Room.
    print("wot")
    room = create_room()
    # Assign it to RoomTracker.
    room_tracker.add_room(room)
    # Return json with room_id information. This room_id will allow you to join a Room.
    res = jsonify({'room_id': room.room_id})
    res.headers.add('Access-Control-Allow-Origin', '*')
    print(77,res)
    return res

@app.route('/get-all-active-room-ids', methods=['GET'])
def get_all_active_room_ids():
    room_ids = room_tracker.get_all_room_ids()
    res = jsonify({'room_ids': room_ids})
    return res


@app.route('/wright/<room_id>', methods=['UPDATE'])
def enter_room(room_id):
    """ Request logic:
        -   User clicks LetsWriteButton
        -   LetsWriteButton sends POST request to create new Room; 
            React renders "unitialized" WrightPage
        -   User gets room_id from response
        =>  User sends UPDATE request and joins Room using the room_id; 
            User gets Room information from response
        -   React uses Room information to "initialize" WrightPage
    """
    return get_room_details(room_id)


@app.route('/wright/join-room')
def join_room():
   room_id = request.args.get('room_id')
   return None 



@app.route('/api/wrighter/create-and-join-room/<room_id>', methods=['POST']) 
def create_wrighter_and_join_room(room_id):
    """ Used when someone clicks the ReadyButton on the WrightPage. 
        Returns
        -------
        the wrighher_id of the Wrighter that was created.
    """
    wrighter = create_wrighter()
    room = room_tracker.get_room(room_id)
    room.add_wrighter(wrighter)
    res = jsonify({'wrighter_id': wrighter.wrighter_id})
    return res

@app.route('/api/wright/<wrighter_id>/join-room/<room_id>', methods=['POST']) 
def create_wrighter_endpoint(wrighter_id, room_id):
    """ Used when someone clicks the ReadyButton on the WrightPage. """
    room_id = request.args.get('room_id')
    # create Wrighter
    print('118', room_id)
    wrighter = create_wrighter()
    # add Wrighter to Room
    room = room_tracker.get_room(room_id)
    # update Room 
    room.add_wrigther(wrighter)
    res = jsonify({'wrighter_id': wrighter.id})
    return res


@app.route('/api/room/get/<room_id>', methods=['GET']) 
def get_room_details(room_id):
    room = room_tracker.get_room(room_id)
    res = jsonify(vars(room))
    return res

@app.route('/api/room/get-all/detailed', methods=['GET']) 
def get_all_active_room_details():
    rooms = room_tracker.get_all_rooms()
    print('ha', rooms)
    room_records = [vars(room) for room_id, room in rooms.items()]
    print('ha', room_records)
    res = jsonify({'rooms': room_records})
    return res



    # make Rooms expire after 24 hours.
    # make after a Room is completed, have to create a new room to start a new session.
    # when all the Wrighters in a Room are ready, and people_requirement is filled
    # start button is ready
    # when start button is pushed, or when send buttons are pushed
    # get updated Room (for tracking turns, and updating Manuscript)


def messageReceived(methods=['GET', 'POST']):
    print('message was received!!!')

@socketio.on('my event')
def handle_my_custom_event(json, methods=['GET', 'POST']):
    print('received my event: ' + str(json))
    socketio.emit('my response', json, callback=messageReceived)


# @app.route('/<path:path>')
# def static_proxy(path):
#     """
#     First we attempt to see if a static file exists, otherwise we let the react
#     client do the routing.
#     """
#     try:
#         return app.send_static_file(path)
#     except:
#         return app.send_static_file('index.html')

