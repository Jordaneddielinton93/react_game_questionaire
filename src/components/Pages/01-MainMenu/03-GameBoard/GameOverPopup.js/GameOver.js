import { useContext } from "react";
import { pageContext } from "../../../../App/App";
import { ACTION } from "../../../../Hooks/useReducer";
import HeadButtons from "../../01-Headings/HeadButtons/HeadButtons";
import { GameOverStyled } from "./GameOver.style";

const GameOver = () => {
  let{dispatch}=useContext(pageContext)

  return ( 
    <GameOverStyled>
      <div className="gameoverBox">

        <h1>Game Over</h1>

        <h1 className="confirm"
         onClick={()=>dispatch({type:ACTION.OPEN_MENU})}>
          Confirm
        </h1>
      
      </div>
    </GameOverStyled>
   );
}
 
export default GameOver;