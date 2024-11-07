import PokemonCard from "./PokemonCard";

const PokemonList = ({ mockData, handleSelectPokemon }) => {
  return (
    <>
      {mockData.map((data) => (
        <PokemonCard
          key={data.id}
          data={data}
          handleSelectPokemon={handleSelectPokemon}
        />
      ))}
    </>
  );
};

export default PokemonList;