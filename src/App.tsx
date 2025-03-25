import Header from "./components/layout/header/header";
import Sidebar from "./components/layout/sidebar/sidebar";
import "./App.scss";
import WeatherPage from "./pages/weather/weather";
import { Route, Routes } from "react-router";
import TodoPage from "./pages/todo/todo";
import NewsPage from "./pages/news/news";
import HomePage from "./pages/home/home";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-area">
        <Header />
        <main>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="weather" element={<WeatherPage />} />
            <Route path="todo" element={<TodoPage />} />
            <Route path="news" element={<NewsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
