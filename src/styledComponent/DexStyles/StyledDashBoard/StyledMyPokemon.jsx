import styled from "styled-components";

export const StyledMyPokemon = styled.div`
  width: 150px;
  height: 150px;

  background-color: #fff;
  border: 3px dashed #fca3c8; /* 투명한 대시 테두리 */  
  display: flex;
  justify-content: center;
  align-items: center;  

  & img {    
    width: 85px;
    height: 85px;
  }
`;
