import { StyledDashboard } from "../styledComponent/DexStyles/Dashboard";
import { MyPokemonWrap } from "../styledComponent/DexStyles/MyPokemonWrap";

const Dashboard = ({ mockData, handleSelectPokemon, selectedPokemon }) => {
  console.log(selectedPokemon);
  console.log(mockData);
  console.log(handleSelectPokemon);
  return (
    <>
      <StyledDashboard>
        <h2>나만의 포켓몬</h2>
        <MyPokemonWrap>
          <div className="my-pokemon"></div>
          <div className="my-pokemon"></div>
          <div className="my-pokemon"></div>
          <div className="my-pokemon"></div>
          <div className="my-pokemon"></div>
          <div className="my-pokemon"></div>
        </MyPokemonWrap>
      </StyledDashboard>
    </>
  );
};

export default Dashboard;
