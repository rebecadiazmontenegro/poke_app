import React, { useState, useEffect, useContext } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { PokemonContext } from "../../../context/PokemonContext";

const Details = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { pokemons: contextPokemons } = useContext(PokemonContext);

  const { pokemon: initialPokemon } = location.state || {};

  // Primero buscar en la location, luego en context y ya sino en API
  const [pokemon, setPokemon] = useState(
    initialPokemon || contextPokemons.find((p) => p.id === Number(id)) || null
  );

  useEffect(() => {
    if (!pokemon) {
      const fetchPokemon = async () => {
        try {
          const res = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${id}`
          );
          setPokemon(res.data);
        } catch (error) {
          console.error("No se pudo cargar el Pokémon", error);
        }
      };
      fetchPokemon();
    }
  }, [id, pokemon]);

  if (!pokemon) return <p>Pokémon no encontrado.</p>;

  const typeOne = pokemon.types?.[0]?.type?.name || "";
  const typeTwo = pokemon.types?.[1]?.type?.name || "";

  return (
    <section className="pokemonDetalle">
      <button className="volverButton" onClick={() => navigate(-1)}>
        Volver
      </button>
      <article className="pokemonDetalleCard">
        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />

        {pokemon.height && <p>Altura: {pokemon.height / 10} m</p>}
        {pokemon.weight && <p>Peso: {pokemon.weight / 10} kg</p>}

        {/* Mostrar tipos separados */}
        {typeOne && <p>Tipo 1: {typeOne}</p>}
        {typeTwo && <p>Tipo 2: {typeTwo}</p>}

        {pokemon.stats && pokemon.stats.length > 0 && (
          <>
            <h3>Estadísticas</h3>
            <ul>
              {pokemon.stats.map((stat) => (
                <li key={stat.stat.name}>
                  <strong>{stat.stat.name}:</strong> {stat.base_stat}
                </li>
              ))}
            </ul>
          </>
        )}
      </article>
    </section>
  );
};

export default Details;
