import React from "react";
import { Search, Mic } from "@mui/icons-material";
import "./index.css";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar">
      <Search className="search-bar__icon search-bar__search-icon clickable" />

      <input
        className="search-bar__input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />

      <Mic className="search-bar__icon search-bar__mic-icon clickable" />
    </div>
  );
};

export default SearchBar;
