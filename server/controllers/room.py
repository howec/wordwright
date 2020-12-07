from server.models.room import Room
import secrets

def create_room():
    # generate a room id
    room_id = generate_room_id()
    return Room(room_id=room_id)

def generate_room_id():
    # use a hash for now. in the future, check for collisions.
    return secrets.token_urlsafe(6)
