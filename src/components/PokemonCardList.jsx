import PokemonCard from "./PokemonCard";
import { StyledPokemonCardWrap } from "../styledComponent/DexStyles/StyledCardList/StyledPokemonCardWrap";
import { MyContext } from "../context/MyContext";
import { useContext } from "react";

const PokemonCardList = () => {
  const { mockData } = useContext(MyContext);

  return (
    <StyledPokemonCardWrap>
      {mockData.map((data) => (
        <PokemonCard key={data.korean_name} data={data} />
      ))}
    </StyledPokemonCardWrap>
  );
};

export default PokemonCardList;
