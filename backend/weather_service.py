import requests
from config import WEATHER_API_KEY

def get_weather(city):

    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={WEATHER_API_KEY}&units=metric"

    response = requests.get(url)
    data = response.json()

    if "main" not in data:
        return {
            "error": "Weather data not found",
            "api_response": data
        }

    weather = {
        "temperature": data["main"]["temp"],
        "humidity": data["main"]["humidity"],
        "weather": data["weather"][0]["description"]
    }

    return weather