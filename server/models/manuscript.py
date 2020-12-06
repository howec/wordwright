import attr

@attr.s
class Manuscript():
    manuscript_id: int = attr.ib(default=None)
    manuscript_lines: List['Script'] = attr.ib(default=[]) 

