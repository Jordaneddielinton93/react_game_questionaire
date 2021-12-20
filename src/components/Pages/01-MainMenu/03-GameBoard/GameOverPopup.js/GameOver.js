import { useContext } from "react";
import { pageContext } from "../../../../App/App";
import { ACTION } from "../../../../Hooks/useReducer";
import HeadButtons from "../../01-Headings/HeadButtons/HeadButtons";
import { GameOverStyled } from "./GameOver.style";

const GameOver = () => {
  let{state,dispatch}=useContext(pageContext)

  return ( 
    <GameOverStyled>
      <div className="gameoverBox">

        <h1>Game Over</h1>
        
        <h1 onClick={()=>dispatch({type:ACTION.OPEN_MENU})}>
          Okay
        </h1>
      
      </div>
    </GameOverStyled>
   );
}
 
export default GameOver;