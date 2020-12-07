from __future__ import annotations
import attr
from typing import TYPE_CHECKING
if TYPE_CHECKING:
    from server.models.room import Room

@attr.s
class RoomTracker():
    rooms: dict[str, Room] = attr.ib(default={})

    def add_room(self, room):
        self.rooms[room.room_id] = room
        return self.rooms

    def get_all_rooms(self):
        return self.rooms

    def get_all_room_ids(self):
        return list(self.rooms.keys())

    def get_room(self, room_id):
        return self.rooms[room_id]
