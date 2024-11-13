import Dashboard from "../components/Dashboard";
import PokemonCardList from "../components/PokemonCardList";
import { mockData } from "../assets/data/mockData";
import { useState } from "react";
import { StyledDexWrap } from "../styledComponent/DexStyles/StyledDexWrap";
import { StyledGoToBackBtn } from "../styledComponent/DexStyles/StyledDashBoard/StyledGoToBackBtn";
import { useNavigate } from "react-router-dom";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/");
  };

  // 포켓몬 선택 추가
  const handleSelectPokemon = (e) => {
    e.preventDefault();

    if (selectedPokemon.length > 5) {
      alert("포켓몬은 최대 6마리까지만 등록할 수 있습니다.");
      return;
    }
    const pokemonName = e.target.id;

    const newList = mockData.find(
      (pokemon) => pokemon.korean_name === pokemonName
    );

    const somePokemon = selectedPokemon.some(
      (item) => item.korean_name === pokemonName
    );

    if (somePokemon) {
      alert("이미 등록된 포켓몬입니다.");
      return;
    }

    setSelectedPokemon([...selectedPokemon, newList]);

    console.log(selectedPokemon);
  };

  // 포켓몬 선택 해제 및 알림
  const handleDeletePokemon = (e) => {
    e.preventDefault();

    const pokemonName = e.target.id;

    const filteringPokemon = selectedPokemon.filter(
      (list) => list.korean_name !== pokemonName
    );
    
    setSelectedPokemon(filteringPokemon);
    alert("선택한 포켓몬을 취소합니다.");
  };

  // 선택 포켓몬 초기화
  const handleResetPokemon = (e) => {
    e.preventDefault();

    const resetPokemon = [];
    setSelectedPokemon(resetPokemon);

    alert("선택한 포켓몬을 모두 취소했습니다.")
    
  }

  return (
    <StyledDexWrap>
      <StyledGoToBackBtn type="button" onClick={goToHomePage}>
        돌아가기
      </StyledGoToBackBtn>
      <Dashboard
        handleDeletePokemon={handleDeletePokemon}
        handleResetPokemon={handleResetPokemon}
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
