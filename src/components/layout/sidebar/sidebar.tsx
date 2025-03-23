import { Cloud, Home, List, MenuOpen } from "@mui/icons-material";
import "./sidebar.scss";
import { NavLink } from "react-router";
import { useSidebar } from "../../../hooks/useSidebar";

const routes = [
  { path: "", label: "Home", icon: Home },
  { path: "weather", label: "Weather", icon: Cloud },
  { path: "todo", label: "To Do", icon: List },
];

const Sidebar = () => {
  const { isOpen, toggle } = useSidebar();

  return (
    <aside className={`sidebar ${!isOpen ? 'collapsed' : ''}`}>
      <div className="sidebar-content">
        <div className="logo">
          <span className="logo-text">PD</span>
          <button className="toggle-btn" onClick={toggle}>
            <MenuOpen className={!isOpen ? 'rotate' : ''} />
          </button>
        </div>

        <nav>
          <ul className="nav-list">
            {routes.map((route) => (
              <NavLink
                to={route.path}
                key={route.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                <li className="nav-item">
                  <route.icon />
                  <span>{route.label}</span>
                </li>
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
