import styled from "styled-components";

export const StyledDetailWrap = styled.div`

width: 100%;
height: 600px;

position: absolute;
left: 50%; top: 50%;
transform: translate(-50%, -55%);

background-color: #ffe9f2;

font-size: 2.1em;
text-align: center;

& img {
  width: 200px;
  height: 200px;
  margin-top: 60px;
}

& h3 {
  font-size: 1.3em;
}

& p {
  margin: 10px;
}

& button {
  width: 300px;
  height: 60px;

  margin: 20px;
  
  border: 3px solid #fefe68;
    
  background-color: #fff;
  border-radius: 10px;


  &:hover {
    cursor: pointer;

    background-color: #fdfd96;
    border: none;
  }
}

`