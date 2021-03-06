
export let ACTION={
  startGameButtton:"START_GAME_BUTTON",
  shipPosition:"SHIP_POSITION",
  SHIP_COLOR:"SHIP_COLOR",
  OPEN_MENU:"OPEN_MENU",
  SCORE_MENU:"SCORE_MENU",
  GAME_OVER_MENU:"GAME_OVER_MENU",
  WRONG_ANSWER:"WRONG_ANSWER"
}

export let inistialState = {
  gameMenuOpen:true,
  scoreMenuOpen:false,
  playerName:"",
  shipPosition:"37.5%",
  shipColor:"white",
  questionNumber:0,
  score:0,
  topScore:0,
  gameOverPopup:false,
}

export function reducer(state,action){
  switch (action.type) {
    case ACTION.startGameButtton:
      return {...state,
        gameMenuOpen:!state.gameMenuOpen,
        playerName:action.newPlayerName
      } 
    case ACTION.OPEN_MENU:
      return {...state,
        gameMenuOpen:true,
        shipPosition:"37.5%",
        questionNumber:0,
        score:0,
        gameOverPopup:false
      } 

    case ACTION.shipPosition:
      return {...state,
        shipPosition:action.newShipPosition,
        questionNumber:state.questionNumber+1,
        score:state.score+10
      }

    case ACTION.SHIP_COLOR:
      let colors=["red","pink","green","orange","white"]
      console.log(action.colorNumber)
      return {...state,
        shipColor:colors[action.colorNumber]
      }

    case ACTION.SCORE_MENU:
      console.log(state.scoreMenuOpen)
      return {...state,
        scoreMenuOpen:!state.scoreMenuOpen
      }

    case ACTION.GAME_OVER_MENU:
      console.log(state.gameOverPopup)
      return {...state,
        gameOverPopup:!state.gameOverPopup
      }
    case ACTION.WRONG_ANSWER:
      return {...state,
        score:state.score-10
      }
    default:
      break;
  }
}