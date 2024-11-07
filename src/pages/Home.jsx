import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goToDexPage = () => {
    navigate("dex");
  }

  return (
    <>
      <div className="home-wrap">
        <h1>Pokemon</h1>
        <button
          type="button"
          onClick={goToDexPage}
        >
          아 몰랑 덱으로 가자 ㅇㅅㅇ
        </button>
      </div>
    </>
  );
};

export default Home;
