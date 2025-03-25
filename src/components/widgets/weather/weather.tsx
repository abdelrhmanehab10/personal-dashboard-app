import axios from "axios";
import { useEffect, useState } from "react";
import "./weather.scss";
import { Air, Water, ImageNotSupported } from "@mui/icons-material";

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

const BASE_URL = "http://api.weatherapi.com/v1/current.json";
const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const WeatherWidget = () => {
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
    <div className="weather-widget-container">
      <div className="weather-main">
        <div className="weather-info">
          <h3>{weather.location.name}</h3>
          <div className="temperature">
            <span className="temp">{Math.round(weather.current.temp_c)}°</span>
            <div className="condition">
              <img 
                src={`https:${weather.current.condition.icon}`} 
                alt={weather.current.condition.text}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="fallback-icon hidden">
                <ImageNotSupported />
              </div>
              <span>{weather.current.condition.text}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="weather-details">
        <div className="detail-item">
          <Air />
          <span>{weather.current.wind_kph} km/h</span>
          <small>Wind</small>
        </div>
        <div className="detail-item">
          <Water />
          <span>{weather.current.humidity}%</span>
          <small>Humidity</small>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
