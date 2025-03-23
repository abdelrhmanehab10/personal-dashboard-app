import Header from "./components/layout/header/header";
import Sidebar from "./components/layout/sidebar/sidebar";
import "./App.scss";
import WeatherPage from "./pages/weather/weather";
import { Route, Routes } from "react-router";
import TodoPage from "./pages/todo/todo";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-area">
        <Header />
        <main>
          <Routes>
            <Route path="weather" element={<WeatherPage />} />
            <Route path="todo" element={<TodoPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
