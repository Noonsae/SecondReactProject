import { StyledDashboard } from "../styledComponent/DexStyles/StyledDashBoard/StyledDashboard";
import { StyledMyPokemonWrap } from "../styledComponent/DexStyles/StyledDashBoard/StyledMyPokemonWrap";
import { StyledMyPokemon } from "../styledComponent/DexStyles/StyledDashBoard/StyledMyPokemon";
import pokeball from "../assets/images/pokeball.png";

const Dashboard = ({ mockData, handleSelectPokemon, selectedPokemon }) => {
  console.log(selectedPokemon);
  console.log(mockData);
  console.log(handleSelectPokemon);
  return (
    <>
      <StyledDashboard>
        <h2>나만의 포켓몬</h2>
        <StyledMyPokemonWrap>
          <StyledMyPokemon>
            <img src={pokeball} alt="Pokeball" />
          </StyledMyPokemon>
          <StyledMyPokemon>
            <img src={pokeball} alt="Pokeball" />
          </StyledMyPokemon>
          <StyledMyPokemon>
            <img src={pokeball} alt="Pokeball" />
          </StyledMyPokemon>
          <StyledMyPokemon>
            <img src={pokeball} alt="Pokeball" />
          </StyledMyPokemon>
          <StyledMyPokemon>
            <img src={pokeball} alt="Pokeball" />
          </StyledMyPokemon>
          <StyledMyPokemon>
            <img src={pokeball} alt="Pokeball" />
          </StyledMyPokemon>
        </StyledMyPokemonWrap>
      </StyledDashboard>
    </>
  );
};

export default Dashboard;
