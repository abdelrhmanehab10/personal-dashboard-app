import Header from "./components/layout/header/header";
import Sidebar from "./components/sidebar/sidebar";
import "./App.scss";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-area">
        <Header />
        {/* Main content will go here */}
      </div>
    </div>
  );
}

export default App;
