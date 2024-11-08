import { StyledDashboard } from "../styledComponent/DexStyles/StyledDashBoard/StyledDashboard";
import { StyledMyPokemon } from "../styledComponent/DexStyles/StyledDashBoard/StyledMyPokemon";

const Dashboard = ({ mockData, handleSelectPokemon, selectedPokemon }) => {
  console.log(selectedPokemon);
  console.log(mockData);
  console.log(handleSelectPokemon);
  return (
    <>
      <StyledDashboard>
        <h2>나만의 포켓몬</h2>
        <StyledMyPokemon>
          <div className="my-pokemon"></div>
          <div className="my-pokemon"></div>
          <div className="my-pokemon"></div>
          <div className="my-pokemon"></div>
          <div className="my-pokemon"></div>
          <div className="my-pokemon"></div>
        </StyledMyPokemon>
      </StyledDashboard>
    </>
  );
};

export default Dashboard;
