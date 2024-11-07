import { useNavigate } from "react-router-dom";

const MoveToDexBtn = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => {
        navigate("./dex");
      }}
    ></button>
  );
};

export default MoveToDexBtn;
