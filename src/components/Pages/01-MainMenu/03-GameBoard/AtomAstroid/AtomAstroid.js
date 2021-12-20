import { AtomAstroidStyled } from "./AtomAstroid.style";
import Astroid from ".././.././../../Images/reactAtom.png"
import AstroidBomb from ".././.././../../Images/reactAtomExplosion.png"
import { useContext, useEffect, useState } from "react";
import { pageContext } from "../../../../App/App";
import { ACTION } from "../../../../Hooks/useReducer";
const AtomAstroid = ({setCount,count}) => {

  let{state,dispatch}=useContext(pageContext)
  let [astroidImg,setAstroidImg]=useState(Astroid)
  let [timer,setTimer]=useState(0)
  useEffect(() => {
    count==70&&setAstroidImg(AstroidBomb)

    setTimeout(() => {
      if(count<70){
        setCount((count) => count + 10);
        setTimer(timer+1)
        console.log(count)
      }else{
        console.log("game over")
        setCount(0)
        dispatch({type:ACTION.OPEN_MENU})
      }
      
    }, 1800);
  },[timer]);

  return ( 
    <AtomAstroidStyled>
      <div style={{
        position:"absolute",left:state.shipPosition,top:`${count}%`,transition:"0.5s",zIndex:35}}>
        <div style={{position:"relative",display:"flex",justifyContent:"center",alignItems:"center", width:"100px"}}>
        {count===70?
        <>
        <div class="spark2"></div>
        <div class="spark3"></div>
        <div class="spark4"></div>
        <div class="spark5"></div>
        <div class="spark6"></div>
        </>:
        <img srcset={astroidImg} alt="astroidrock" width="100px"/>
        }
        </div>
      </div>
       
    </AtomAstroidStyled>
   );
}
 
export default AtomAstroid;