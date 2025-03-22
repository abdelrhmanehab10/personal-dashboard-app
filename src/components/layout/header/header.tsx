import "./header.scss";
import { Star, Notifications } from "@mui/icons-material";
import { Stack, Button, Avatar } from "@mui/material";

const Header = ({}) => {
  return (
    <header>
      <div className="navbar">
        <h1>Hello Abdelrhman</h1>
        <div className="header-actions">
          <Stack spacing={2} direction="row">
            <Button variant="contained">
              <Star />
              Upgrade your plan
            </Button>
          </Stack>
          <Notifications className="notification-icon" />
          <Avatar className="user-avatar" alt="User Profile" src="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
