from __future__ import annotations
import attr
from typing import TYPE_CHECKING
if TYPE_CHECKING:
    from server.models.room import Room
    from server.models.wrighter import Wrighter

@attr.s
class Room():
    # class variables    
    # helps us keep track of rooms, what rooms exist and are active
    room_id: str = attr.ib(default=None)
    wrighter_requirement: int = attr.ib(default=5)
    wrighters: list[Writer] = attr.ib(default=[]) 
    current_wrighter: int = attr.ib(default=0)  
    # inspiration_source includes word bank, generator etc
    inspiration_source: 'Inspiration' = attr.ib(default="connection")  
    # statuses = initialized, ready, in-progress, completed
    room_status: str = attr.ib(default="initialized")
    
    # manuscript: List['ManuscriptLine'] = attr.ib(default=[[]])  
    manuscript: 'Manuscript' = attr.ib(default=None)   
    # class methods

    def asdict(self):
        return {}

    def add_wrighter(self, wrighter):
        self.wrighters.append(wrighter)

    # coordinate moving to a conclusion room at the same time for all users    

    # decide on the inspiration source based off of user votes

    # if there's a tie, randomize between the tie to choose the source

    # add "Line" to "Manuscript".

    # get current writer ()
    #   current_writer = writer_order[current_writer_index]


    # get rankings