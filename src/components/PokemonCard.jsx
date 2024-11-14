import { useNavigate } from "react-router-dom";
import { StyledPokemonCard } from "../styledComponent/DexStyles/StyledCardList/StyledPokemonCard";
import { MyContext } from "../context/MyContext";
import { useContext } from "react";

const PokemonCard = ({ data }) => {
  const { handleSelectPokemon } = useContext(MyContext);

  const navigate = useNavigate();

  const goToDetailPage = () => {
    navigate(`/detail/${data.id}`);
  };

  return (
    <StyledPokemonCard key={data.korean_name}>
      <a onClick={goToDetailPage}>
        <img src={data.img_url} alt={data.korean_name} />
      </a>
      <h3>{data.korean_name}</h3>
      <span>No. {String(data.id).padStart(3, "0")}</span>
      <button type="button" id={data.korean_name} onClick={handleSelectPokemon}>
        선택
      </button>
    </StyledPokemonCard>
  );
};

export default PokemonCard;
