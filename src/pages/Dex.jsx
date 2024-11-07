import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  return (
    <div className="dex-warp">
      <Dashboard />
      <PokemonList />
    </div>
  );
};

export default Dex;
