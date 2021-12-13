import { useContext } from "react";
import { pageContext } from "../../../../App/App";
import { SpaceShipeStyled } from "./SpaceShip.style";

const SpaceShip = () => {
  let{state}=useContext(pageContext)
  return ( 
    <SpaceShipeStyled shipLocation={state.shipPosition} shipColor={state.shipColor}>
      <div className="shipContainer">
        <div className="rocket">
        <div className="fuselage">
          <div className="nose"></div>
          <div className="head">
            <span className="window"></span>
          </div>
          <div className="neck"></div>
          <div className="body"></div>
          <div className="reactor"></div>
          <div className="fire">
            <div className="spark1"></div>
            <div className="spark2"></div>
            <div className="spark3"></div>
            <div className="spark4"></div>
            <div className="spark5"></div>
            <div className="spark6"></div>
          </div>
        </div>
        <div className="left-fin"></div>
        <div className="left-fin-end"></div>
        <div className="right-fin"></div>
        <div className="right-fin-end"></div>
      </div>
  </div>
  </SpaceShipeStyled>
   );
}
 
export default SpaceShip;