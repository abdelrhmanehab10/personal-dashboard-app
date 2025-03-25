import axios from "axios";
import { useEffect, useState } from "react";
import "./news.scss";
import { ImageNotSupported } from "@mui/icons-material";

interface NewsItem {
  title: string;
  description: string;
  image_url: string;
  published_at: string;
  source: string;
  url: string;
}

const BASE_URL = "https://api.thenewsapi.com/v1/news/top";
const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const NewsWidget = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  const getNews = async () => {
    const result = await axios.get(
      `${BASE_URL}?api_token=${NEWS_API_KEY}&locale=eg&limit=2`
    );
    setNews(result.data.data);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="news-widget-container">
      <div className="news-scroll">
        {news?.map((item) => (
          <div className="news-item" key={item.url}>
            <div className="news-image">
              <img
                src={item.image_url}
                alt={item.title}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling?.classList.remove(
                    "hidden"
                  );
                }}
              />
              <div className="fallback-image hidden">
                <ImageNotSupported />
              </div>
            </div>
            <div className="news-content">
              <h4>{item.title}</h4>
              <div className="news-footer">
                <span className="source">{item.source}</span>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsWidget;
