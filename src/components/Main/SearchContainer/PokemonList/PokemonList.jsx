import React from "react";
import PokemonCard from "./PokemonCard/PokemonCard";

const PokemonList = ( {pokemons} ) => {
 
const renderCard = () => pokemons.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)

  return (
    <section className="pokemonList">
      <div className="rendercard">
       {renderCard()}
      </div>
    </section>
  );
};

export default PokemonList;
