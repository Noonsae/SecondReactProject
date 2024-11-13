import { useState } from "react";
import { MyContext } from "./MyContext";
import { mockData } from "../assets/data/mockData";

const MyProvider = ({ children }) => {
  

  const [selectedPokemon, setSelectedPokemon] = useState([]);
  
  // 포켓몬 선택 추가
  const handleSelectPokemon = (e) => {    

    if (selectedPokemon.length >= 6) {
      alert("포켓몬은 최대 6마리까지만 등록할 수 있습니다.");
      return;
    }
    const pokemonName = e.target.id;

    const newList = mockData.find(
      (pokemon) => pokemon.korean_name === pokemonName
    );

    if (!newList) {
      alert("존재하지 않는 포켓몬입니다.");
      return;
    }

    const somePokemon = selectedPokemon.some(
      (item) => item.korean_name === pokemonName
    );

    if (somePokemon) {
      alert("이미 등록된 포켓몬입니다.");
      return;
    }

    setSelectedPokemon([...selectedPokemon, newList]);
  };

  // 포켓몬 선택 해제 및 알림
  const handleDeletePokemon = (e) => {

    const pokemonName = e.target.id;

    const filteringPokemon = selectedPokemon.filter(
      (list) => list.korean_name !== pokemonName
    );
    
    setSelectedPokemon(filteringPokemon);
    alert(`${pokemonName}을(를) 취소합니다.`);
  };

  // 선택 포켓몬 초기화
  const handleResetPokemon = () => {

    setSelectedPokemon([]);

    alert("선택한 포켓몬을 모두 취소했습니다.")    
  }

  return (
    <MyContext.Provider value={{ selectedPokemon, handleSelectPokemon, handleDeletePokemon, handleResetPokemon, mockData }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;