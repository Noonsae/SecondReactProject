import { useState } from "react";
import { mockData } from "../assets/data/mockData";

const PokemonCard = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const handleSelectPokemon = (e) => {
    
    const pokemonId = e.target.id;
    console.log(pokemonId)    
  };

  return (
    <>
      {mockData.map((data) => (
        <div className="pokemon-card" key={data.id}>
          <img src={data.img_url} alt={data.korean_name} />
          <h3>{data.korean_name}</h3>
          <p>No : {String(data.id).padStart(3, "0")}</p>
          <button
            type="button"
            id={data.korean_name}
            onClick={handleSelectPokemon}
          >
            추가
          </button>
        </div>
      ))}
    </>
  );
};

export default PokemonCard;
