import { useNavigate } from 'react-router-dom';

const MoveToDexBtn = () => {

  const navigate = useNavigate();

  return (
    <button
          type="button"
          onClick={() => {
            navigate("./dex")
          }}
        >
          포켓몬 도감 시작하기
        </button>
  )
}

export default MoveToDexBtn