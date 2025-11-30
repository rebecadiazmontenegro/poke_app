import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search/Search";
import PokemonList from "./PokemonList/PokemonList";

const SearchContainer = () => {
  const [value, setValue] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [message, setMessage] = useState(""); // para que salga el mensaje si el pokemon ya se ha buscado
  const [clearInput, setClearInput] = useState(() => () => {});

  const fetchPokemon = async (pokemonName) => {
    if (!pokemonName) return;

    if (
      pokemons.some((p) => p.name.toLowerCase() === pokemonName.toLowerCase())
    ) {
      setMessage(`¡El Pokémon ${pokemonName} ya está en la lista!`); // Por si el Pokémon ya está en la lista
      return;
    }

    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );
      setPokemons((prev) => [...prev, res.data]); //Para que pueda guardarse el pokemon que buscas cuando buscas otro
      clearInput();
      setValue(""); // Para que el debounce no este buscando todo el rato
      setMessage(""); // Limpiar mensaje si la búsqueda fue correcta
    } catch (e) {
      setMessage(`No se encontró el Pokémon ${pokemonName}.`);
    }
  };
  
  useEffect(() => { //Aquí empieza el debounce 
    if (!value) return;

    const timeoutId = setTimeout(() => {
      fetchPokemon(value);
    }, 3000);

    return () => clearTimeout(timeoutId); // Para que no llame a la API mientras se esta escribiendo, solo cuando se para 
  }, [value]);

  return (
    <section>
      <Search
        setValue={setValue}
        fetchPokemon={fetchPokemon}
        setClearInput={setClearInput}
      />
      {message && <p>{message}</p>}
      <PokemonList pokemons={pokemons} />
    </section>
  );
};

export default SearchContainer;
