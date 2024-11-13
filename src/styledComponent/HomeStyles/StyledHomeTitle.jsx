import styled from "styled-components"
import pokeTitle from "../../assets/images/poketitle.png"

export const StyledHomeTitle = styled.h1`
  display: block;
  width: 600px;
  height: 200px;

  background: url(${pokeTitle}) no-repeat center /contain;

  text-indent: -9999px;

  position: absolute;
  left: 50%;
  top:50%;
  transform: translate(-50%, -140%);
  
`