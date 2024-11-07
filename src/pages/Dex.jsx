import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { mockData } from "../assets/data/mockData";
import { useState } from "react";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState("");

  const handleSelectPokemon = (e) => {
    const pokemonName = e.target.id;
    console.log(pokemonName);

    const selectedPokemonData = mockData.find(
      (pokemon) => pokemon.korean_name === pokemonName
    );

    if (selectedPokemonData) {
      setSelectedPokemon(selectedPokemonData);
    }
  };

  return (
    <div className="dex-warp">
      <Dashboard
        mockData={mockData}
        handleSelectPokemon={handleSelectPokemon}
        selectedPokemon={selectedPokemon}
      />
      <PokemonList
        mockData={mockData}
        handleSelectPokemon={handleSelectPokemon}
      />
    </div>
  );
};

export default Dex;
