import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokeCollection, setPokeCollection] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(r => r.json())
    .then(pokemon => setPokeCollection(pokemon));
  }, []);

  function handleSubmit(e, newPokemon) {
    e.preventDefault();

    fetch('http://localhost:3001/pokemon', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accepts': 'application/json' },
    body: JSON.stringify(newPokemon),
    })
    .then(r => r.json())
    .then(newPokemon => setPokeCollection([...pokeCollection, newPokemon]))
  }

  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }
  
  const pokemonToRender = pokeCollection.filter(poke => {
    if(searchQuery === "") return true;
    return poke.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleSubmit={handleSubmit} />
      <br />
      <Search handleSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemon={pokemonToRender} />
    </Container>
  );
}

export default PokemonPage;
