import styled from "styled-components";

export const StyledPokemonCard = styled.div`
  width: 150px;
  height: 250px;
  margin: 10px;

  background-color: #fff;
  border-radius: 10px;

  box-shadow: 3px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 1.3em;

  & a:hover {
    cursor: pointer;
  }
  & a.selected:hover {
    cursor: auto;
  }
  & img {
    width: 100%;
    height: 150px;
  }

  & span {
    margin: 6px 0;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 2px 4px rgba(0, 0, 0, 0.1);
    transition: 0.1s;
  }

  & button {
    display: block;
    width: 60px;
    height: 25px;

    color: #fff;

    border: none;
    border-radius: 5px;
    background-color: #4fc753;
  }

  & button:hover {
    cursor: pointer;
    background-color: #3c973f;
  }

  & button.selected {
    background-color: #f43434;
  }
  & button.selected:hover {
    background-color: #cd2c2c;
  }
`;
