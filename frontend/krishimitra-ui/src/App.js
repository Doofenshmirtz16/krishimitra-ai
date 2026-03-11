import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const API = "http://127.0.0.1:8000";

  const [city, setCity] = useState("");
  const [crop, setCrop] = useState("");

  const [weather, setWeather] = useState(null);
  const [advice, setAdvice] = useState(null);
  const [price, setPrice] = useState(null);

  const [image, setImage] = useState(null);
  const [disease, setDisease] = useState(null);

  const [loading, setLoading] = useState(false);

  // WEATHER
  const fetchWeather = async () => {

    if(!city){
      alert("Please enter a city");
      return;
    }

    try {

      setLoading(true);

      const res = await axios.get(`${API}/weather/${city}`);

      setWeather(res.data);

    } catch (err) {

      alert("Weather fetch failed");

    } finally {

      setLoading(false);

    }
  };

  // IRRIGATION ADVICE
  const fetchAdvice = async () => {

    if(!city || !crop){
      alert("Enter both city and crop");
      return;
    }

    try {

      setLoading(true);

      const res = await axios.get(`${API}/advice/${city}/${crop}`);

      setAdvice(res.data);

    } catch (err) {

      alert("Advice fetch failed");

    } finally {

      setLoading(false);

    }
  };

  // MARKET PRICE
  const fetchPrice = async () => {

    if(!crop){
      alert("Enter crop name first");
      return;
    }

    try {

      setLoading(true);

      const res = await axios.get(`${API}/market/${crop}`);

      setPrice(res.data);

    } catch (err) {

      alert("Market API failed");

    } finally {

      setLoading(false);

    }
  };

  // DISEASE DETECTION
  const uploadImage = async () => {

    if(!image){
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);

    try {

      setLoading(true);

      const res = await axios.post(`${API}/detect-disease`, formData);

      setDisease(res.data);

    } catch (err) {

      alert("Image upload failed");

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="container">

      <h1>🌱 KrishiMitra AI Dashboard</h1>

      {loading && <p>Loading...</p>}

      <div className="card">

        <h2>Weather Information</h2>

        <input
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={fetchWeather}>Get Weather</button>

        {weather && (
          <div>
            <p>Temperature: {weather.temperature} °C</p>
            <p>Humidity: {weather.humidity} %</p>
            <p>Condition: {weather.weather}</p>
          </div>
        )}

      </div>

      <div className="card">

        <h2>Irrigation Advice</h2>

        <input
          placeholder="Enter Crop"
          value={crop}
          onChange={(e) => setCrop(e.target.value)}
        />

        <button onClick={fetchAdvice}>Get Advice</button>

        {advice && (
          <p>{advice.recommendation}</p>
        )}

      </div>

      <div className="card">

        <h2>Market Price</h2>

        <button onClick={fetchPrice}>Check Market Price</button>

        {price && (
          <p>Price per kg: ₹{price.price_per_kg}</p>
        )}

      </div>

      <div className="card">

        <h2>Crop Disease Detection</h2>

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button onClick={uploadImage}>Upload Image</button>

        {disease && (
          <div>
            <p>Disease: {disease.disease}</p>
            <p>Confidence: {disease.confidence}</p>
          </div>
        )}

      </div>

    </div>
  );
}

export default App;