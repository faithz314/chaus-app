from sqlalchemy import Base, Integer, String
from .database import Base

# Create the PostgreSQL first model
class Order(Base):
    __table__name = "orders"
    id = Column(Integer, primary_key=True, index=True)
    customer_name = Column(String)
    drink = Column(name)