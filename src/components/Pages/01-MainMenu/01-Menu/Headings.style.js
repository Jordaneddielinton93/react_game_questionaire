import styled from "styled-components";

export const HeadingStyle = styled.section`
  display: flex;
  position: absolute;
  top: 7.5%;
  left: 20px;
  max-width: ${props=>props.menuWidth?"500px":"0px"};
  width: 500px;
  height: 85vh;
  border-width: ${props=>props.menuWidth?"3px":"1.5px"};
  border-style: solid;
  flex-direction:column;
  z-index: 15;
  padding: ${props=>props.menuWidth?"10px":"0px"};
  transition: 0.5s;
  border-image: 
    linear-gradient(
      to bottom, 
      #52C8B2, 
      rgba(0, 0, 0, 0)
    ) 1 100%;
  

`