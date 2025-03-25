import { Link } from "react-router";
import "./home.scss";
import { Cloud, List, Newspaper } from "@mui/icons-material";
import WeatherWidget from "../../components/widgets/weather/weather";
import TodoWidget from "../../components/widgets/todo/todo";
import NewsWidget from "../../components/widgets/news/news";

const HomePage = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-grid">
        <div className="widget-wrapper large">
          <div className="widget-card">
            <div className="widget-header">
              <h2><Cloud /> Weather</h2>
              <Link to="/weather">View Full</Link>
            </div>
            <WeatherWidget />
          </div>
        </div>

        <div className="widget-wrapper">
          <div className="widget-card">
            <div className="widget-header">
              <h2><List /> Tasks</h2>
              <Link to="/todo">View Full</Link>
            </div>
            <TodoWidget />
          </div>
        </div>

        <div className="widget-wrapper">
          <div className="widget-card">
            <div className="widget-header">
              <h2><Newspaper /> News</h2>
              <Link to="/news">View Full</Link>
            </div>
            <NewsWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
