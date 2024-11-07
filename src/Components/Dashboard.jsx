const Dashboard = ({ mockData, handleSelectPokemon, selectedPokemon }) => {
  console.log(selectedPokemon);
  console.log(mockData);
  console.log(handleSelectPokemon);
  return (
    <>
      <div className="dashboard">
        <h2>나만의 포켓몬</h2>
        <div className="my-pokemon-wrap">
          <div className="my-pokemon"></div>
          <div className="my-pokemon"></div>
          <div className="my-pokemon"></div>
          <div className="my-pokemon"></div>
          <div className="my-pokemon"></div>
          <div className="my-pokemon"></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
