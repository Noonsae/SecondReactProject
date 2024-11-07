import MoveToDexBtn from "../components/MoveToDexBtn";

const Home = () => {
  return (
    <>
      <div className="home-wrap">
        <h1>Pokemon</h1>
        <MoveToDexBtn 
          value = "포켓몬 도감 시작하기"
        />
      </div>
    </>
  );
};

export default Home;
