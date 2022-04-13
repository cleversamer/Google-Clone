import React from "react";
import { Link } from "react-router-dom";
import { Apps } from "@mui/icons-material";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <header className="home__header">
      <div className="home__header-left">
        <Link to="/about" className="home__header-link">
          About
        </Link>

        <Link to="/store" className="home__header-link">
          Store
        </Link>
      </div>

      <div className="home__header-right">
        <div className="home__header-right-left">
          <Link to="/gmail" className="home__header-link">
            Gmail
          </Link>

          <Link to="/images" className="home__header-link">
            Images
          </Link>
        </div>

        <div className="home__header-right-right">
          <Apps className="home__header-svg clickable" />

          <Avatar className="home__header-svg clickable" />
        </div>
      </div>
    </header>
  );
};

export default Header;
