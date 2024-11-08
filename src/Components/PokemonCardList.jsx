import PokemonCard from "./PokemonCard";
import { PokemonCardWrap } from "../styledComponent/DexStyles/PokemonCardWrap"

const PokemonCardList = ({ mockData, handleSelectPokemon }) => {
  return (
    <PokemonCardWrap>
      {mockData.map((data) => (
        <PokemonCard
          key={data.id}
          data={data}
          handleSelectPokemon={handleSelectPokemon}
        />
      ))}
    </PokemonCardWrap>
  );
};

export default PokemonCardList;
