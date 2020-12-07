import attr

@attr.s
class Manuscript():
    manuscript_id: str = attr.ib(default=None)
    manuscript_lines: List['Script'] = attr.ib(default=[]) 

