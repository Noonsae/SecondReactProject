import { StyledPokemonCard } from "../styledComponent/DexStyles/StyledPokemonCard";

const PokemonCard = ({ data, handleSelectPokemon }) => {
  return (
    <StyledPokemonCard key={data.korean_name}>
      <img src={data.img_url} alt={data.korean_name} />
      <h3>{data.korean_name}</h3>
      <p>No. {String(data.id).padStart(3, "0")}</p>
      <button type="button" id={data.korean_name} onClick={handleSelectPokemon}>
        선택
      </button>
    </StyledPokemonCard>
  );
};

export default PokemonCard;

