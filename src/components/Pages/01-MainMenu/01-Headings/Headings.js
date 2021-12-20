import { useContext, useRef, useState } from "react";
import { pageContext } from "../../../App/App";
import { ACTION } from "../../../Hooks/useReducer";
import { HeadingStyle } from "./Headings.style";
import HeadButtons from "./HeadButtons/HeadButtons";
import SpaceShip from "../03-GameBoard/SpaceShip/SpaceShip";
import ScoreMenu from "./ScoreMenu/ScoreMenu";

const Headings = () => {
let{state,dispatch}=useContext(pageContext)

  let userName=useRef("Chris")
  
  let [color,setColor]=useState(0)
  
  function changeColor(){
    color<4?setColor(color+1):setColor(0)
    return color
  }

  return ( 
    <HeadingStyle menuWidth={state.gameMenuOpen}>
      {state.scoreMenuOpen?
      
      <ScoreMenu/>
      :
      <>
        <HeadButtons
          isHtml_text_Tag={true}
        title={"SCHOOL OF CODE"}/>

        <HeadButtons 
          isHtml_text_Tag={true}
          title={"Play Game"}
          handleClick={()=>dispatch({type:ACTION.startGameButtton,newPlayerName:userName.current.value})}/>
        <HeadButtons
          isHtml_text_Tag={false}
          userName={userName}
        />
        <HeadButtons 
          isHtml_text_Tag={true}
          title={"Score Board"}
          handleClick={()=>dispatch({type:ACTION.SCORE_MENU})}
          />
        <HeadButtons 
          isHtml_text_Tag={true}
          title={"Ship Color"}
          handleClick={()=>dispatch({type:ACTION.SHIP_COLOR,colorNumber:changeColor()})}/>
        
        <SpaceShip/>
      </>
    }
    </HeadingStyle>
   );
}
 
export default Headings;