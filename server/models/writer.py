import attr

@attr.s
class Writer():
    writer_id: int = attr.ib(default=None)
    writer_username: str = attr.ib(default='Default') 
    writer_score: int = attr.ib(default=0)
    lines: List['Script'] = attr.ib(default=[])
    # writer_color options = red, orange, yellow...
    writer_color: str = attr.ib(default='red')
    used_words: List[str] = attr.ib(default=[])


