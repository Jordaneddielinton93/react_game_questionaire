import styled from "styled-components";

export const GameBoardStyled=styled.main`
  z-index:12;
  position:absolute ;
  top:7.5vh;
  width: 100vw;
  height: 85vh;
  /* background-color:red; */
  display:flex;
  & .columns{
    display: flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:center;
    position: relative;
    width: 25vw;
    height: 95%;
    z-index:35;

    & .answerButtons{
      height:100px;
      width: 23vw;
      font-size:1.3rem;
      border-radius:50px;
      box-shadow: 0 0 60px 10px rgba(0,147,233, 0.72), -14px -15px 40px -10px rgba(128,208,199, 0.23);
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