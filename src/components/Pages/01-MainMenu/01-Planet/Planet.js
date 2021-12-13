import { PlanetStyled } from "./Planet.style";

const Planet = () => {
  return ( 
    <PlanetStyled>
      <div className="planet"> 
        <div className="wrap">
          <div className="background"></div>
          <div className="clouds"></div>   
        </div>
      <div className="mask"></div>
    </div>
    </PlanetStyled>
   );
}
 
export default Planet;