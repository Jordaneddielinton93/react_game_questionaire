import styled from "styled-components";

export const SpaceShipeStyled=styled.div`
position: absolute;
width: 100%;
bottom:0;
z-index:15;
overflow:hidden;
.shipContainer{
  width: 100%;
  height:200px ;
  position: relative;
}
.rocket {
  position: absolute;
  width: 50px;
  margin: 0 auto;
  transition: 0.5s ease-in-out;
  left:${(props)=>props.shipLocation};
  bottom:40px;
  /* 12.5% =1 */
  /* 37.5% =2 */
  /* 62.5% =2 */
  /* 87.5% =3 */
  animation: pulse 1s infinite ease-in-out alternate;
}

@keyframes pulse {
  from { transform: scale(0.8); }
  to { transform: scale(0.7); }
}

.fuselage {
  width: 50px;
}

.nose {
  width: 25px;
  margin: 0 auto;
  border-top: 15px solid #353535;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

.head {
  possition: relative;
  display:block;
  border-bottom: 25px solid ${(props)=>props.shipColor};
  /*  */
	border-left: 10px solid transparent;
	border-right: 10px solid transparent;
	height: 0;
	width: 25px;
  margin: 0 auto;
}

.window {
  position: absolute;
  top:16px;
  left:10px;
  border-bottom: 15px solid #00a0d6;
	border-left: 5px solid transparent;
	border-right: 5px solid transparent;
	height: 0;
	width: 20px;
}

.neck{
  position: relative;
  width: 45px;
  height: 30px;
  margin: 0 auto;
  background: ${(props)=>props.shipColor};
  /*  */
  
}

.reactor {
  position: relative;
  border-bottom: 30px solid #241919;
	border-left: 7px solid transparent;
	border-right: 10px solid transparent;
	height: 0;
	width: 30px;
  margin: 0 auto;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: -10px;
    width: 15px;
    opacity: 0.3;
    border-bottom: 30px solid #e0e0e0;
    border-left: 10px solid transparent;
  }
}

.fire {
  position: relative;
  width: 15px;
  height: 70px;
  margin: 0 auto;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  animation: fire 0.2s infinite;
  
  > div {
    position: absolute;
    background: #ED0302;
  }
}



@keyframes fire {
  0% {
    background: linear-gradient(to bottom, #FC6C2F 0%, rgba(249,1,124,1) 50%, rgba(247,3,3,1) 100%);
  }
  50% {
    background: linear-gradient(to bottom, rgba(230,3,3,1) 0%, rgba(255,114,28,1) 51%, rgba(239,1,224,1) 100%);
  }
  100% {
    background: linear-gradient(to bottom, rgba(239,1,124,1) 0%, rgba(237,3,3,1) 51%, rgba(255,134,28,1) 100%);
  }
}




`