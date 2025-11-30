import React, { useState, useEffect } from "react";

const Search = ({ setValue, fetchPokemon, setClearInput }) => {
  const [input, setInput] = useState("");

  // Pasar la función para limpiar el input al SearchContainer
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
    fetchPokemon(input); // Buscar inmediatamente al pulsar el botón
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Busca un Pokémon"
        />
        <button type="submit">Buscar</button>
      </form>
    </section>
  );
};

export default Search;
