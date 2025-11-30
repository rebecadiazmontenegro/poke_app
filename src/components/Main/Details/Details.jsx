import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const { pokemon: initialPokemon } = location.state || {}; // Para no tener que buscar al pokemon desde la api lo busca de los que se han buscado enel el buscador (desde el boton detalles)
  const [pokemon, setPokemon] = useState(initialPokemon || null); // Si no lo encuentra ahi ya llama a la api otra vez

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

  return (
    <section>
      <button onClick={() => navigate(-1)}>Volver</button>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Altura: {pokemon.height / 10} m</p>
      <p>Peso: {pokemon.weight / 10} kg</p>
      <p>Tipos: {pokemon.types.map(t => t.type.name).join(", ")}</p>
      <h3>Estadísticas</h3>
      <ul>
        {pokemon.stats.map(stat => (
          <li key={stat.stat.name}>
            <strong>{stat.stat.name}:</strong> {stat.base_stat}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Details;