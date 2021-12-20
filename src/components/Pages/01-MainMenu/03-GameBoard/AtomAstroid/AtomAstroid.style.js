import styled from "styled-components";

export const AtomAstroidStyled = styled.div`
  position: absolute;
  top:0%;
  width: 100%;
  height: 100%;
  display:flex;
  z-index:35;

.spark2 {
  position:absolute;
  top:-10px,  width: 20px;
  height: 20px;
  border-radius:50%;
  z-index:35;
  animation: fireBig 0.3s infinite;
}

.spark3 {
  position:absolute;
  left:5px,  width: 50px;
  height: 50px;
  border-radius:50%;
  animation: fireSmall 0.4s infinite;
  z-index:35;
}

.spark4 {
  position:absolute;
  left:-10px,  left: -20px;
  width: 30px;
  height: 30px;
  border-radius:50%;
  animation: fireSmall 0.7s infinite;
  z-index:35;
}
.spark5 {
  position:absolute ;
  left:50%;
  
  width: 10px;
  height: 10px;
  border-radius:50%;
  animation: fireSmall 0.6s infinite;
  z-index:35;
}
.spark6 {
  position:absolute;
  top: 5px;
  width: 10px;
  height: 10px;
  border-radius:50%;
  animation: fireSmall 0.2s infinite;
}

@keyframes fireBig {
  0% {
    width: 10px;
    height: 10px;
    background: #FF861C;
  }
  50% {
    background: #FF861C;
  }
  100% {
    width: 60px;
    height: 60px;
  }
}

@keyframes fireSmall {
  0% {
    width: 10px;
    height: 10px;
    background: #EF017C;
  }
  50% {
    background: #FF861C;
  }
  100% {
    width: 50px;
    height: 50px;
  }
}


  
`