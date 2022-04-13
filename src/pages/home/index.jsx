import React, { useState } from "react";
import Header from "../../components/header";
import SearchBar from "../../components/search-bar";
import ButtonsGroup from "../../components/buttons-group";
import "./index.css";

const Home = (props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = input.trim();
    if (value) {
      setInput("");
      window.location.replace(`https://www.google.com/search?q=${value}`);
    }
  };

  return (
    <div className="home">
      <Header />

      <div className="home__body">
        <img className="home__body-image" src="img/logo.png" alt="Google" />

        <form className="home__input-container" onSubmit={handleSubmit}>
          <SearchBar value={input} onChange={setInput} />
          <ButtonsGroup />
        </form>
      </div>
    </div>
  );
};

export default Home;
