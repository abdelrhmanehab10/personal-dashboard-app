import axios from "axios";
import { useEffect, useState } from "react";
import "./weather.scss";
import { WbSunny, Air, Water } from "@mui/icons-material";

const BASE_URL = "http://api.weatherapi.com/v1/current.json";
const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

interface WeatherData {
  location: {
    name: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_kph: number;
    humidity: number;
    feelslike_c: number;
  };
}

const WeatherPage = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const getCurrentWeather = async () => {
    const result = await axios.get(
      `${BASE_URL}?key=${WEATHER_API_KEY}&q=Cairo&aqi=no`
    );
    setWeather(result.data);
  };

  useEffect(() => {
    getCurrentWeather();
  }, []);

  if (!weather) return <div>Loading...</div>;

  return (
    <div className="weather-page">
      <div className="weather-card">
        <div className="weather-main">
          <div className="weather-info">
            <h2>{weather.location.name}, {weather.location.country}</h2>
            <p className="date">{weather.location.localtime}</p>
            <div className="temperature">
              <span className="temp">{Math.round(weather.current.temp_c)}°</span>
              <span className="feels-like">Feels like {Math.round(weather.current.feelslike_c)}°</span>
            </div>
            <p className="condition">{weather.current.condition.text}</p>
          </div>
          <div className="weather-icon">
            <img src={`https:${weather.current.condition.icon}`} alt={weather.current.condition.text} />
          </div>
        </div>
        <div className="weather-details">
          <div className="detail-item">
            <Air />
            <span>Wind</span>
            <span>{weather.current.wind_kph} km/h</span>
          </div>
          <div className="detail-item">
            <Water />
            <span>Humidity</span>
            <span>{weather.current.humidity}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
