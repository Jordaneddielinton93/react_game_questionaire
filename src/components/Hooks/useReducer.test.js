import { render } from "@testing-library/react"
import { useReducer } from "react"
import { pageContext } from "../App/App"
import GameBoard from "../Pages/01-MainMenu/03-GameBoard/GameBoard"
import { inistialState, reducer } from "./useReducer"


test("checkscore and question number goes up by 10 and 1 (score:10,Question:1) on correct answer",()=>{
  
  // dispatch({type:ACTION.shipPosition,newShipPosition:shipLocFromArr /* update the reducer with the next ship location from the index */})
 
  let state={...inistialState,gameMenuOpen:false}
  let dispatch
  let {getByTestId} = render(
    
    <pageContext.Provider value={{state,dispatch}}>
      <GameBoard/>
    </pageContext.Provider>
  )

  let answerButton = getByTestId("answerButton")

  console.log(answerButton)
})