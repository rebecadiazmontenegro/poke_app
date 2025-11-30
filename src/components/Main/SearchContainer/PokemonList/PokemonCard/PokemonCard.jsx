// PokemonCard.js
import React from "react";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    // Solo pasamos el id, el resto lo podemos obtener con fetch si es necesario
    navigate(`/pokemon/${pokemon.id}`, { state: { pokemon } });
  };

  return (
    <article className="pokemonCard">
      <div className="topCard">
        <h3>{pokemon.name}</h3>
        <div className="lights">
          <div className="lightRed"></div>
          <div className="lightBlue"></div>
          <div className="lightGreen"></div>
        </div>
      </div>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <button className="detalleButtom" onClick={handleDetails}>Detalles</button>
    </article>
  );
};

export default PokemonCard;
