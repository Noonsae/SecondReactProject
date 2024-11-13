import { StyledDashboard } from "../styledComponent/DexStyles/StyledDashBoard/StyledDashboard";
import { StyledMyPokemonWrap } from "../styledComponent/DexStyles/StyledDashBoard/StyledMyPokemonWrap";
import { StyledMyPokemon } from "../styledComponent/DexStyles/StyledDashBoard/StyledMyPokemon";
import { StyledPokemonCard } from "../styledComponent/DexStyles/StyledCardList/StyledPokemonCard";
import pokeball from "../assets/images/pokeball.png";
import { useNavigate } from "react-router-dom";
import { StyledResetBtn } from "../styledComponent/DexStyles/StyledDashBoard/StyledResetBtn";

const Dashboard = (
  {      
    selectedPokemon,    
    handleDeletePokemon,
    handleResetPokemon
  }) => {

  console.log(selectedPokemon);  

  const navigate = useNavigate();
  const goToDetailPage = () => {
    navigate("/details");
  }

  return (
    
      <StyledDashboard>
        <h2>포켓몬 도감</h2>
        <p>포켓몬을 선택해주세요.</p>
        <StyledResetBtn onClick={handleResetPokemon}>초기화버튼</StyledResetBtn>
        <StyledMyPokemonWrap>

          {Array.from({ length: 6}).map((_, index) => {
            const currentPokemon = selectedPokemon[index];
            
            return (
              <>
              {currentPokemon ? (
                <StyledPokemonCard key={currentPokemon.id}>
                  <a>
                    <img src={currentPokemon.img_url} alt={currentPokemon.korean_name} />
                  </a>
                  <h3>{currentPokemon.korean_name}</h3>
                  <span>No. {String(currentPokemon.id).padStart(3, "0")}</span>
                  <button type="button" className="selected" id={currentPokemon.korean_name} onClick={handleDeletePokemon}>
                    삭제
                  </button>
                </StyledPokemonCard>

              ): (
                <StyledMyPokemon>
                  <img src={pokeball} alt="Pokeball" />
                </StyledMyPokemon>
              )}
            </>
            )})
          }
        </StyledMyPokemonWrap>
      </StyledDashboard>

            
  



          // <StyledMyPokemon>
          //   <img src={pokeball} alt="Pokeball" />
          // </StyledMyPokemon>
          // <StyledMyPokemon>
          //   <img src={pokeball} alt="Pokeball" />
          // </StyledMyPokemon>
          // <StyledMyPokemon>
          //   <img src={pokeball} alt="Pokeball" />
          // </StyledMyPokemon>
          // <StyledMyPokemon>
          //   <img src={pokeball} alt="Pokeball" />
          // </StyledMyPokemon>
          // <StyledMyPokemon>
          //   <img src={pokeball} alt="Pokeball" />
          // </StyledMyPokemon>


        
    
  );
};

export default Dashboard;
