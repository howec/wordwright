from sqlalchemy import Column, Integer, String, ForeignKey, Boolean, DateTime
from sqlalchemy.orm import relationship
from server.models import Base, update_db
import datetime
import secrets


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True,
                unique=True, autoincrement=True)

    email = Column(String, unique=True, primary_key=True)

    clients = relationship("Client", back_populates="user")

    date_created = Column(DateTime, default=datetime.datetime.now)
    date_updated = Column(DateTime, default=datetime.datetime.now)
    date_last_signin = Column(DateTime, default=datetime.datetime.now)

    def __init__(self, email):
        self.email = email

    def sign_in(self):
        self.date_last_signin = datetime.datetime.now()
        update_db()