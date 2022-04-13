import React from "react";
import { Link } from "react-router-dom";
import { Apps } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <Link to="/" className="header__link">
          About
        </Link>

        <Link to="/" className="header__link">
          Store
        </Link>
      </div>

      <div className="header__right">
        <div className="header__right-left">
          <Link to="/" className="header__link">
            Gmail
          </Link>

          <Link to="/" className="header__link">
            Images
          </Link>
        </div>

        <div className="header__right-right">
          <Apps className="header__svg clickable" />

          <a href="https://twitter.com/ssadawi__" target="__blank">
            <Avatar
              className="header__svg clickable"
              src="https://avatars.githubusercontent.com/u/73291969?v=4"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
