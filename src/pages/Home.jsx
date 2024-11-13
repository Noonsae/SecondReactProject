import { useNavigate } from "react-router-dom";

import {StyledHomeWrap} from "../styledComponent/HomeStyles/StyledHomeWrap"
import {StyledHomeTitle} from "../styledComponent/HomeStyles/StyledHomeTitle";
import {StyledGoToDexBtn} from "../styledComponent/HomeStyles/StyledGoToDexBtn"


const Home = () => {
  const navigate = useNavigate();
  const goToDexPage = () => {
    navigate("dex");
  }

  return (
    <>
      <StyledHomeWrap>
        <StyledHomeTitle>Logo</StyledHomeTitle>
        <StyledGoToDexBtn
          type="button"
          onClick={goToDexPage}
        >
          &nbsp; 포켓몬 도감으로 이동하기
        </StyledGoToDexBtn>
      </StyledHomeWrap>
    </>
  );
};

export default Home;
