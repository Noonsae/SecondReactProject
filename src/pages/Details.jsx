import { useNavigate } from "react-router-dom";

const Details = () => {

  const navigate = useNavigate();
  const goToBackPage = () => {
    navigate("/dex");
  }
  
  return (
    <>
      <div className="Details-wrap">
        <h1>Pokemon_Details_Page</h1>
        <button
          type="button"
          onClick={goToBackPage}
        >
          아 몰랑 다시 돌아가자 ㅇㅅㅇ
        </button>
      </div>
    </>
  );
};

export default Details;
