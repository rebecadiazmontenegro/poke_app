import { createContext, useState, useEffect } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  // Cargar Pokémon guardados en LocalStorage al iniciar
  useEffect(() => {
    const storedPokemons = localStorage.getItem("pokemons");
    if (storedPokemons) {
      setPokemons(JSON.parse(storedPokemons));
    }
  }, []);

  const addPokemon = (newPokemon) => {
    setPokemons((prev) => {
      const updated = [...prev, newPokemon];
      // Guardar en LocalStorage cada vez que se añade un nuevo Pokémon
      localStorage.setItem("pokemons", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <PokemonContext.Provider value={{ pokemons, addPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};
