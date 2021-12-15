import styled from "styled-components";

export const HeadButtonStyled=styled.div`
    display: ${(props)=>props.showButtons?"flex":"none"};
    align-items: center;
    letter-spacing: 5px;
    height: 50px;
    padding: 0px 15px;
    margin:15px 0px;
    background-image: linear-gradient(to left, rgba(255,0,0,0), #0093E9);
    color: #52C8B2;
    font-size:2rem;
    border-left: thick solid rgba(82, 200, 178,1);
    border-bottom:solid thick rgba(0,147,233,0.5) ;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    cursor: pointer;
    transition: 1.5s;
    z-index: 12;
    &:hover{
      color: #8F8247;
      padding: 0px 20px;
      margin-left: 10px;
      border-bottom-right-radius: 0px;
      letter-spacing: 7px;
      box-shadow: 0 0 60px 10px rgba(0,147,233, 0.72), -14px -15px 40px -10px rgba(128,208,199, 0.23);
    }
`