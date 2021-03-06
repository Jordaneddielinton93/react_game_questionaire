import { useContext, useState } from "react";
import { pageContext } from "../../../App/App";
import { ACTION } from "../../../Hooks/useReducer";
import { questionsArray } from "../02-GameQuestions/QuestionsArray";
import AtomAstroid from "./AtomAstroid/AtomAstroid";
import { GameBoardStyled } from "./GameBoard.style";
import GameOver from "./GameOverPopup.js/GameOver";
import SpaceShip from "./SpaceShip/SpaceShip";

const GameBoard = () => {
  let{state,dispatch}=useContext(pageContext)
  const [count, setCount] = useState(10);

  let {answer,guessArray} = questionsArray[state.questionNumber]


  let buttonLocations=["12.5%","37.5%","62.5%","87.5%"]
  return ( 
    <GameBoardStyled>
      {state.gameOverPopup&&<GameOver/>}
    

      {!state.gameMenuOpen &&<AtomAstroid count={count} setCount={setCount}/>}


      {!state.gameMenuOpen &&
      buttonLocations.map((shipLocFromArr,buttonIndex)=>{
        return ( 
        <div className="columns">
          {state.shipPosition!==shipLocFromArr?
          
          <button className="answerButtons" data-testid="answerButton" onClick={()=>{

            if(answer===buttonIndex){
          
            dispatch({type:ACTION.shipPosition,newShipPosition:shipLocFromArr /* update the reducer with the next ship location from the index */})
            setCount(0)
            }else{
              dispatch({type:ACTION.WRONG_ANSWER/* update the reducer with the next ship location from the index */})
            }
            }}>

          
            {guessArray[buttonIndex] /* title for buttons */}
          </button>
          :
          ""
          } 
          
        </div>
      )
      })}
      {!state.gameMenuOpen &&<SpaceShip/>}
      
    </GameBoardStyled>
   );
}
 
export default GameBoard;