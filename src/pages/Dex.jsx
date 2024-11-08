import Dashboard from "../components/Dashboard";
import PokemonCardList from "../components/PokemonCardList";
import { mockData } from "../assets/data/mockData";
import { useState } from "react";
import { DexWrap } from "../styledComponent/DexStyles/DexWrap";

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
    <DexWrap>
      <Dashboard
        mockData={mockData}
        handleSelectPokemon={handleSelectPokemon}
        selectedPokemon={selectedPokemon}
      />

      <PokemonCardList
        mockData={mockData}
        handleSelectPokemon={handleSelectPokemon}
      />
    </DexWrap>
  );
};

export default Dex;
