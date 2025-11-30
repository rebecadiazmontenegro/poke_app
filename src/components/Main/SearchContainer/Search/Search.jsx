import React, { useState, useEffect } from "react";

const Search = ({ setValue, fetchPokemon, setClearInput }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    setClearInput(() => () => setInput(""));
  }, [setClearInput]);

  const handleChange = (e) => {
    const val = e.target.value;
    setInput(val);
    setValue(val); // Actualiza el value para debounce
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPokemon(input); 
  };

  return (
    <section className="search">
      <h1>Encuentra tu Pokemon</h1>
      <form className="formSearch" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Busca un Pokémon"
        />
        <button className="searchButton" type="submit">Buscar</button>
      </form>
    </section>
  );
};

export default Search;
