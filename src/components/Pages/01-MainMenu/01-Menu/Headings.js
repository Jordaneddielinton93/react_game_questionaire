import { useContext, useRef, useState } from "react";
import { pageContext } from "../../../App/App";
import { ACTION } from "../../../Hooks/useReducer";
import { HeadingStyle } from "./Headings.style";
import HeadButtons from "./HeadButtons/HeadButtons";
import SpaceShip from "../03-GameBoard/SpaceShip/SpaceShip";
import ScoreMenu from "./ScoreLeaderBoards/ScoreMenu";

const Headings = () => {
let{state,dispatch}=useContext(pageContext)

  let userName=useRef("")
  
  let [color,setColor]=useState(0)
  let [border,setborder]=useState("none")
  
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
        border={"none"}

        <HeadButtons 
          isHtml_text_Tag={true}
          title={"Play Game"}
          border={"none"}
          handleClick={()=>{
            if(userName.current.value.length<=0){
              return setborder("solid thick red")
            }
            setborder("none")
            dispatch({type:ACTION.startGameButtton,newPlayerName:userName.current.value})
            
            }}/>
        <HeadButtons
          isHtml_text_Tag={false}
          userName={userName}
          border={border}
        />
        <HeadButtons 
          isHtml_text_Tag={true}
          title={"Score Board"}
          handleClick={()=>dispatch({type:ACTION.SCORE_MENU})}
          border={"none"}
          />
        <HeadButtons 
          isHtml_text_Tag={true}
          title={"Ship Color"}
          handleClick={()=>dispatch({type:ACTION.SHIP_COLOR,colorNumber:changeColor()})}/>
          border={"none"}
        
        <SpaceShip/>
      </>
    }
    </HeadingStyle>
   );
}
 
export default Headings;