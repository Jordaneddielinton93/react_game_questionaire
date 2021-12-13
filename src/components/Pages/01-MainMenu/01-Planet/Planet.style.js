import styled from "styled-components";
import CloudsGreen from "../../../Images/PlanetClouds1.png"
import planetBack from "../../../Images/planetbackground2.jpg"
export const PlanetStyled = styled.div`
position: relative;
overflow: hidden;
max-width: 100vw;
height: 100%;
z-index: 12;

.planet{
  width:700px;
  height:700px;
  position:absolute;
  border-radius:50%;
  overflow:hidden;
  box-shadow: 0 0 60px 10px rgba(0,147,233, 0.72), -14px -15px 40px -10px rgba(128,208,199, 0.23);
  left:70%;
  top:30%;
  margin:-150px;
  z-index: 10;
}
.planet .mask{
  width:100%;
  height:100%;
  position: absolute;
  box-shadow:inset 10px 10px 40px #228c82, inset 10px 10px 30px -10px rgba(183, 244, 216, 0.6);
  border-radius:50%;
}
.planet .background{
  animation: translateBackground 40s infinite linear;  
  background:url(${planetBack}) repeat-x;
  width:700px;
  height:700px;
  position:absolute;
  border-radius:50%;
}
.planet .clouds{
  background:url(${CloudsGreen}) repeat-x;
  background-size: cover;
  width:700px;
  height:700px;
  position:absolute;
  border-radius:50%;
  animation: translateBackground 30s infinite linear;
  opacity: 0.4;
}
.planet .wrap{
  width:700px;
  height:700px;
  position:absolute;
  border-radius:50%;
  animation: rotatePlanet 150s infinite linear;  
}
@keyframes translateBackground{
  0%{
    background-position-x:0;
  }
  100%{
    background-position-x:-600px;
  }
}
@keyframes rotatePlanet{
  0%{
    transform:rotateZ(0);
  }
  100%{
    transform:rotateZ(-360deg);
  }
}










`