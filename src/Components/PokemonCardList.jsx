import PokemonCard from "./PokemonCard";
import { StyledPokemonCardWrap } from "../styledComponent/DexStyles/StyledCardList/StyledPokemonCardWrap";

const PokemonCardList = ({ mockData, handleSelectPokemon }) => {
  return (
    <StyledPokemonCardWrap>
      {mockData.map((data) => (
        <PokemonCard
          key={data.id}
          data={data}
          handleSelectPokemon={handleSelectPokemon}
        />
      ))}
    </StyledPokemonCardWrap>
  );
};

export default PokemonCardList;
