import styled from "styled-components";

export const GameOverStyled = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color:rgba(0,0,0,0.8);
  z-index:40;
  display: flex;
  justify-content:center;
  align-items:center;
  & .gameoverBox{
    color:white;
    width: 300px;
    height:300px;
    background-color:#0093E9;
    border:thick inset white;
    border-radius:20px;
    display: flex;
    flex-direction:column;
    box-shadow: 0 0 60px 10px rgba(0,147,233, 0.72), -14px -15px 40px -10px rgba(128,208,199, 0.23);
    justify-content:space-evenly;
    align-items:center;
    & .confirm{
      border:thin solid white;
      border-radius:20px;
      width:80%;
      cursor:pointer;
      &:hover{
        color:red;
      }

    }
  }
`
