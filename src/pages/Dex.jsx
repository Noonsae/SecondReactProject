import Dashboard from "../components/Dashboard";
import PokemonCardList from "../components/PokemonCardList";
// import { useState } from "react";
import { StyledDexWrap } from "../styledComponent/DexStyles/StyledDexWrap";
import { StyledGoToBackBtn } from "../styledComponent/DexStyles/StyledDashBoard/StyledGoToBackBtn";
import { useNavigate } from "react-router-dom";

const Dex = () => {

  const navigate = useNavigate();
  
  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <StyledDexWrap>
      <StyledGoToBackBtn type="button" onClick={goToHomePage}>
        돌아가기
      </StyledGoToBackBtn>
      <Dashboard/>

      <PokemonCardList/>
    </StyledDexWrap>
  );
};

export default Dex;
