import styled from "styled-components";

export const GameBoardStyled=styled.main`
  z-index:12;
  position:absolute ;
  top:5%;
  width: 100vw;
  height: 89vh;
  /* background-color:red; */
  display:flex;
  & .columns{
    display: flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:center;
    position: relative;
    width: 25vw;
    height: 100%;
    z-index:25;

    & .answerButtons{
      height:30px;
      width: 23vw;
      cursor:pointer
    }
    & .rock{
      position: absolute;
      height:30px;
      width: 90%;
    }
  }
  & .columns:nth-child(odd){
    
    /* background-Color:pink ; */
  }
`