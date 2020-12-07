from __future__ import annotations
import attr
from typing import TYPE_CHECKING
if TYPE_CHECKING:
    from server.models.room import Room
    from server.models.script import Script

@attr.s
class Wrighter():
    wrighter_id: str = attr.ib(default=None)
    wrighter_username: str = attr.ib(default='Default') 
    wrighter_score: int = attr.ib(default=0)
    lines: list['Script'] = attr.ib(default=[])
    # wrighter_color options = red, orange, yellow...
    wrighter_color: str = attr.ib(default='red')
    used_words: list[str] = attr.ib(default=[])

    
