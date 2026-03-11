from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from weather_service import get_weather
from recommendation_engine import irrigation_advice
from fastapi import UploadFile, File
from disease_detection import detect_disease
from market_service import get_market_price

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "KrishiMitra AI Backend Running"}

@app.get("/weather/{city}")
def weather(city: str):
    data = get_weather(city)
    return data

@app.get("/advice/{city}/{crop}")
def advice(city: str, crop: str):

    weather = get_weather(city)

    recommendation = irrigation_advice(weather, crop)

    return {
        "crop": crop,
        "weather": weather,
        "recommendation": recommendation
    }

import os

@app.post("/detect-disease")
async def detect(file: UploadFile = File(...)):

    os.makedirs("temp", exist_ok=True)

    file_path = os.path.join("temp", file.filename)

    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())

    result = detect_disease(file_path)

    return result

@app.get("/market/{crop}")
def market(crop: str):

    price = get_market_price(crop)

    return {
        "crop": crop,
        "price_per_kg": price
    }