import { Cloud, Home, List } from "@mui/icons-material";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        {/* TODO: add our logo */}
        <img src="" alt="" className="logo" />

        <nav>
          <ul className="nav-list">
            <li className="nav-item active">
              <Home />
              <span>Home</span>
            </li>
            <li className="nav-item">
              <Cloud />
              <span>Weather</span>
            </li>
            <li className="nav-item">
              <List />
              <span>To Do</span>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
