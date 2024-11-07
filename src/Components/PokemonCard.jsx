const PokemonCard = ({ data, handleSelectPokemon }) => {
  return (
    <div className="pokemon-card" key={data.korean_name}>
      <img src={data.img_url} alt={data.korean_name} />
      <h3>{data.korean_name}</h3>
      <p>No : {String(data.id).padStart(3, "0")}</p>
      <button type="button" id={data.korean_name} onClick={handleSelectPokemon}>
        추가
      </button>
    </div>
  );
};

export default PokemonCard;
