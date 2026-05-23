from fastapi import FastAPI
from .database import engine, Base, SessionLocal
from .models import Order
from .schemas import OrderCreate
from sqlalchemy.orm import Session

Base.metadata.create_all(bind=engine)
app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# get message when you open the app
@app.get("/")
def root():
    return {"message": "Coffee Shop API"}

# post app orders
@app.post("/orders")
def create_order(order: OrderCreate, db: Session = Depends(get_db)):
    new_order=Order(
        customer_name=order.customer_name,
        drink=order.drink
    )
    db.add(new_order)
    db.commit()
    db.referesh(new_order)
    return new_order
