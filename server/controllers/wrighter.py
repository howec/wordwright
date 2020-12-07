from server.models.wrighter import Wrighter
import secrets

def create_wrighter():
    wrighter_id = generate_wrighter_id()
    return Wrighter(wrighter_id=wrighter_id)

def generate_wrighter_id():
    # use a hash for now. in the future, check for collisions.
    return secrets.token_urlsafe(6)
