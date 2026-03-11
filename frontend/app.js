import React, { useState } from "react";
import axios from "axios";

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {

    const response = await axios.get(
      `http://127.0.0.1:8000/weather/${city}`
    );

    setWeather(response.data);
  };

  return (
    <div style={{padding:"40px"}}>

      <h1>KrishiMitra AI Dashboard</h1>

      <h3>Weather Information</h3>

      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e)=>setCity(e.target.value)}
      />

      <button onClick={fetchWeather}>Get Weather</button>

      {weather && (
        <div style={{marginTop:"20px"}}>
          <p>Temperature: {weather.temperature} °C</p>
          <p>Humidity: {weather.humidity} %</p>
          <p>Condition: {weather.weather}</p>
        </div>
      )}

    </div>
  );
}

export default App;