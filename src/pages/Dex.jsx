import Dashboard from "../components/Dashboard";
import PokemonCardList from "../components/PokemonCardList";
import { mockData } from "../assets/data/mockData";
import { useState } from "react";
import { StyledDexWrap } from "../styledComponent/DexStyles/StyledDexWrap";
import {StyledGoToBackBtn} from "../styledComponent/DexStyles/StyledDashBoard/StyledGoToBackBtn";
import { useNavigate } from "react-router-dom";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/");
  }

  const handleSelectPokemon = (e) => {

    e.preventDefault();

    if (selectedPokemon.length >5){
      alert("문제발생알림")
      return;
    }
    
    const pokemonName = e.target.id;
    
    const newList = mockData.find(
      (pokemon) => pokemon.korean_name === pokemonName
    );
    
    setSelectedPokemon([...selectedPokemon, newList]);

    console.log(selectedPokemon);
  };

  return (
    <StyledDexWrap>
      <StyledGoToBackBtn
      type="button"
      onClick={goToHomePage}>
        돌아가기
        </StyledGoToBackBtn>
      <Dashboard        
        handleSelectPokemon={handleSelectPokemon}
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />

      <PokemonCardList
        mockData={mockData}
        handleSelectPokemon={handleSelectPokemon}
      />
    </StyledDexWrap>
  );
};

export default Dex;
