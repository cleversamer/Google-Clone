import React from "react";
import "./index.css";

const ButtonsGroup = () => {
  return (
    <div className="buttons">
      <button className="buttons__btn clickable" type="submit">
        Google Search
      </button>

      <button className="buttons__btn clickable" type="submit">
        I'm Feeling Lucky
      </button>
    </div>
  );
};

export default ButtonsGroup;
