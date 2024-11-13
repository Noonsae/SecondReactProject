import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { mockData } from "../assets/data/mockData";
import { StyledDetailWrap } from "../styledComponent/DetailsStyles/StyledDetailWrap";

const Details = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const findPokemon = mockData.find((item) => item.id === Number(id));

    console.log(findPokemon);

    setPokemon(findPokemon);
  }, [id]);

  const navigate = useNavigate();
  const goToBackPage = () => {
    navigate(-1);
  };

  return (
    <div>
      {pokemon && (
        <StyledDetailWrap>
          <img src={pokemon.img_url} alt={pokemon.korean_name}></img>
          <h3>{pokemon.korean_name}</h3>
          <p>{pokemon.types}</p>
          <span>No. {String(pokemon.id).padStart(3, "0")}</span>
          <p>{pokemon.description}</p>
          <button type="button" onClick={goToBackPage}>
            도감페이지로 돌아가기
          </button>
        </StyledDetailWrap>
      )}
    </div>
  );
};

export default Details;
