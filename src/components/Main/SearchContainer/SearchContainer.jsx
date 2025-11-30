import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Search from "./Search/Search";
import PokemonList from "./PokemonList/PokemonList";
import { PokemonContext } from "../../../context/PokemonContext";

const SearchContainer = () => {
  const { pokemons: contextPokemons } = useContext(PokemonContext);
  const [value, setValue] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [message, setMessage] = useState(""); 
  const [clearInput, setClearInput] = useState(() => () => {});

  const fetchPokemon = async (pokemonName) => {
    if (!pokemonName) return;

    if (
      [...pokemons, ...contextPokemons].some(
        (p) => p.name.toLowerCase() === pokemonName.toLowerCase()
      )
    ) {
      setMessage(`¡El Pokémon ${pokemonName} ya está en la lista!`);
      return;
    }

    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );
      setPokemons((prev) => [...prev, res.data]);
      clearInput();
      setValue("");
      setMessage("");
    } catch (e) {
      setMessage(`No se encontró el Pokémon ${pokemonName}.`);
    }
  };

  useEffect(() => {
    if (!value) return; // <- evita peticiones con input vacío

    const timeoutId = setTimeout(() => {
      fetchPokemon(value);
    }, 2000); // debounce 2s

    return () => clearTimeout(timeoutId);
  }, [value]);

  return (
    <section>
      <Search
        setValue={setValue}
        fetchPokemon={fetchPokemon}
        setClearInput={setClearInput}
      />
      {message && <p className="alertMensaje">{message}</p>}
      <PokemonList pokemons={[...contextPokemons, ...pokemons]} />
    </section>
  );
};

export default SearchContainer;
