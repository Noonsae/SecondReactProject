import { useNavigate } from "react-router-dom";

const Details = () => {

  const navigate = useNavigate();
  const goToBackPage = () => {
    navigate("/dex");
  }

  return (
    <>
      <div className="Details-wrap">
        <h2>Pokemon_Details_Page</h2>
        <button
          type="button"
          onClick={goToBackPage}
        >
          도감페이지로 돌아가기
        </button>
      </div>
    </>
  );
};

export default Details;
