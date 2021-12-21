import { useContext } from "react";
import { pageContext } from "../../../../App/App";
import { ACTION } from "../../../../Hooks/useReducer";
import HeadButtons from "../HeadButtons/HeadButtons";
import { ScoreMenuStyled } from "./ScoreMenu.style";

const ScoreMenu = () => {
let{data,dispatch}=useContext(pageContext)
  
  return ( 
    <ScoreMenuStyled>

      <HeadButtons 
          isHtml_text_Tag={true}
          title={"Home Screen"}
          handleClick={()=>dispatch({type:ACTION.SCORE_MENU})}
          />

    {data.map(({user_name,user_score})=>{
      return <HeadButtons 
      isHtml_text_Tag={true}
      fontsize={true}
      title={`NAME: ${user_name} SCORE:${user_score}`}
      />
    })}
    
      
    </ScoreMenuStyled>
   );
}
 
export default ScoreMenu;