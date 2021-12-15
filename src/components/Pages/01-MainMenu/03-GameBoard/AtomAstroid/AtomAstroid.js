import { AtomAstroidStyled } from "./AtomAstroid.style";
import Astroid from ".././.././../../Images/reactAtom.png"
import { useContext, useEffect, useState } from "react";
import { pageContext } from "../../../../App/App";
import { ACTION } from "../../../../Hooks/useReducer";
const AtomAstroid = ({setCount,count}) => {

  let{state,dispatch}=useContext(pageContext)

  let [timer,setTimer]=useState(0)
  useEffect(() => {
    setTimeout(() => {
      if(count<70){
        setCount((count) => count + 10);
        setTimer(timer+1)
      }else{
        console.log("game over")
        setCount(0)
        dispatch({type:ACTION.OPEN_MENU})
      }
      
    }, 1600);
  },[timer]);

  return ( 
    <AtomAstroidStyled>
      <img srcset={Astroid} alt="astroidrock" width="100px" style={{position:"absolute",left:state.shipPosition,top:`${count}%`,transition:"0.5s",zIndex:35}}
      
      />
    </AtomAstroidStyled>
   );
}
 
export default AtomAstroid;