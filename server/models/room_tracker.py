import attr

@attr.s
class RoomTracker():
    rooms: Dict[int, 'Room'] = attr.ib(default=[])

def add_room(self, room):
    self.rooms[room.room_id] = room
    return self.rooms

