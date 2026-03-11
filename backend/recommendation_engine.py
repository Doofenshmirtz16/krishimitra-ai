def irrigation_advice(weather, crop):

    temp = weather["temperature"]
    humidity = weather["humidity"]

    if humidity > 80:
        return "High humidity detected. Avoid irrigation today."

    if temp > 35:
        return "Temperature is high. Irrigate early morning."

    return "Weather conditions normal. Irrigation can proceed."