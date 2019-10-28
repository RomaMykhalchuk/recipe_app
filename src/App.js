import React, { useEffect, useState } from "react";
import Receipe from "./Receipe";
import "./App.css";

const App = () => {
  const APP_ID = "70e01ba8";
  const APP_KEY = "ec74d80d93232ef2521309887b8f1858";
  const [receipies, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const infoToSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  useEffect(() => {
   getRecipe();
  }, [query]);

  async function getRecipe() {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipe(data.hits);
    console.log(data.hits);
  }
  return (
    <div className="app">
      <form className="search-form" onSubmit={getSearch}>
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={infoToSearch}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="recepies">
        {receipies.map(currentItem => (
          <Receipe
            title={currentItem.recipe.label}
            calories={currentItem.recipe.calories}
            image={currentItem.recipe.image}
            key={currentItem.recipe.label}
            ingredients={currentItem.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
