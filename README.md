# 🌱 KrishiMitra AI

KrishiMitra AI is an intelligent agriculture assistant designed to help farmers make informed decisions using **Artificial Intelligence and real-time data**.
The platform integrates **machine learning, weather APIs, and agricultural market data** to provide crop disease detection, irrigation advice, and market insights.

---

## 🚀 Features

### 🌾 Crop Disease Detection

* Upload a plant leaf image
* Deep learning model detects disease
* Built using **Transfer Learning with MobileNetV2**

### ☁️ Real-Time Weather Data

* Fetches live weather data using OpenWeather API
* Provides temperature, humidity, and weather conditions

### 💧 Irrigation Advice

* Smart irrigation recommendation based on:

  * Weather conditions
  * Crop type
  * Humidity levels

### 📈 Market Price Insights

* Fetches crop market prices using agricultural data APIs
* Helps farmers decide when to sell crops

---

## 🧠 Tech Stack

### Frontend

* React.js
* Axios
* CSS

### Backend

* FastAPI
* Python

### Machine Learning

* TensorFlow / Keras
* MobileNetV2 Transfer Learning
* OpenCV
* NumPy

### APIs

* OpenWeather API
* Agricultural Market Data API (Agmarknet / Data.gov.in)

---

## 🏗 Project Architecture

```
                React Frontend
                     │
                     ▼
              FastAPI Backend
                     │
     ┌───────────────┼───────────────┐
     ▼               ▼               ▼
Weather API     ML Disease Model   Market API
(OpenWeather)   (MobileNet CNN)    (Agmarknet)
```

---

## 📂 Project Structure

```
krishimitra-ai
│
├── backend
│   ├── main.py
│   ├── disease_detection.py
│   ├── weather_service.py
│   ├── market_service.py
│   └── venv
│
├── frontend
│   └── krishimitra-ui
│
├── models
│   └── plant_disease
│       ├── dataset
│       ├── model
│       │   └── plant_disease_model.h5
│       ├── train_model.py
│       └── predict.py
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/yourusername/krishimitra-ai.git
cd krishimitra-ai
```

---

### 2️⃣ Backend Setup

Navigate to backend folder:

```
cd backend
```

Create virtual environment:

```
python -m venv venv
```

Activate environment:

**Windows**

```
venv\Scripts\activate
```

Install dependencies:

```
pip install fastapi uvicorn tensorflow opencv-python numpy pillow requests
```

Run backend server:

```
uvicorn main:app --reload
```

Server will run at:

```
http://127.0.0.1:8000
```

---

### 3️⃣ Frontend Setup

Navigate to frontend:

```
cd frontend/krishimitra-ui
```

Install dependencies:

```
npm install
```

Start React app:

```
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

## 🤖 Machine Learning Model

We used the following dataset for our project: https://www.kaggle.com/datasets/emmarex/plantdisease

The disease detection system uses:

**Transfer Learning with MobileNetV2**

Steps:

1. Load pretrained MobileNetV2
2. Freeze base layers
3. Add custom classification head
4. Train on plant disease dataset
5. Save trained model

Training script:

```
models/plant_disease/train_model.py
```

Prediction script:

```
models/plant_disease/predict.py
```

---

## 📊 Example API Endpoints

### Weather

```
GET /weather/{city}
```

Example:

```
/weather/roorkee
```

---

### Irrigation Advice

```
GET /advice/{city}/{crop}
```

Example:

```
/advice/roorkee/wheat
```

---

### Market Price

```
GET /market/{crop}
```

Example:

```
/market/wheat
```

---

### Disease Detection

```
POST /detect-disease
```

Upload plant image.

Response:

```
{
 "disease": "Tomato Early Blight",
 "confidence": 0.93
}
```

---

## 🎯 Future Improvements

* AI-powered farmer chatbot
* Soil health integration
* Satellite crop monitoring
* Mobile app deployment
* Edge AI for offline diagnosis

---

## 🏆 Hackathon Project

This project was developed as part of a **Microsoft Hackathon prototype** focusing on AI-driven agriculture solutions.

---

## 👨‍💻 Contributors

* Team Panchtantra

---

## 📜 License

MIT License

