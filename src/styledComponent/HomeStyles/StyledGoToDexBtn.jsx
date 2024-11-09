import styled from "styled-components"
import PokemonImage from "../../assets/images/poke-gruop.png"

export const StyledGoToDexBtn = styled.button`
  display: block;
  width: 480px;
  height: 250px;
  border: 0px solid red;

  background: url(${PokemonImage}) no-repeat center / cover;
  
  color: #08174e;
  line-height: 540px;
  font-size: 3.2em;

  position: absolute;
  left: 50%;
  top:50%;
  transform: translate(-50%, -50%);  

  &:hover {
    cursor: pointer;
    width: 520px;
    height: 300px;
    line-height: 570px;
    transform: translate(-50%, -47%);
  }




`