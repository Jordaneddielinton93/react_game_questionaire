import { useContext } from "react";
import { pageContext } from "../../../../App/App";
import { ACTION } from "../../../../Hooks/useReducer";
import { GameOverStyled } from "./GameOver.style";

async function callApi(prev_user_id,user_name,user_score){
  await fetch(`https://react-questionnaire-space-game.herokuapp.com/scores/${prev_user_id}`,{
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      "user_name":user_name,
      "user_score":user_score
      })
  })
}

const GameOver = () => {
  
  let{state,data,dispatch}=useContext(pageContext)
  function callApiAndOpenMenu(){
    dispatch({type:ACTION.OPEN_MENU})
    let prev_user_id;
    let prev_number=0;
    data.forEach(({user_id,user_score})=>{
      if(user_score<=state.score && prev_number<=user_score){
        prev_user_id=user_id
        prev_number=user_score

      }
      
    })
    console.log(prev_user_id)
    if(prev_user_id!==undefined){
      callApi(prev_user_id,state.playerName,state.score)
    }
  }

  return ( 
    <GameOverStyled>
      <div className="gameoverBox">

        <h1>Game Over</h1>

        <h1 className="confirm"
         onClick={callApiAndOpenMenu}>
          Confirm
        </h1>
      
      </div>
    </GameOverStyled>
   );
}
 
export default GameOver;