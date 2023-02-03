import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {
  const pokemonCards = pokemon.map(poke => {
    // console.log("Creating PokemonCard for " + poke.name + ": " + poke.id);
    return <PokemonCard key={poke.id} name={poke.name} hp={poke.hp} sprites={poke.sprites} />
  });

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonCards}
    </Card.Group>
  );
}

export default PokemonCollection;
