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

const NewsPage = () => {
  const [news, setNews] = useState<NewsItem[] | null>(null);

  const getNews = async () => {
    const result = await axios.get(
      `${BASE_URL}?api_token=${NEWS_API_KEY}&locale=eg&limit=3`
    );

    setNews(result.data.data);
  };

  useEffect(() => {
    getNews();
  }, []);

  if (!news) return <div>Loading...</div>;

  return (
    <div className="news-container">
      {news?.map((item) => (
        <div className="news-card" key={item.url}>
          <div className="news-image">
            <img
              src={item.image_url}
              alt={item.title}
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling?.classList.remove("hidden");
              }}
            />
            <div className="fallback-image hidden">
              <ImageNotSupported />
              <span>Image not available</span>
            </div>
          </div>
          <div className="news-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="news-footer">
              <span className="source">{item.source}</span>
              <span className="date">
                {new Date(item.published_at).toLocaleDateString()}
              </span>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsPage;
