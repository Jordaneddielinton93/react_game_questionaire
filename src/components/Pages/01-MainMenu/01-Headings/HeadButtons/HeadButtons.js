import { useContext } from "react";
import { pageContext } from "../../../../App/App";
import { HeadButtonStyled } from "./HeadButtons.style";


  const inputStyle={
    width:"100%",
    height:"80%",
    backgroundColor:"rgba(0,0,0,0)",
    justifySelf:"center",
    textAlign:"center",
    fontSize:"1.5rem",
    color:"white",
    border:"none"
  }

  const HeadButtons = ({title,handleClick,isHtml_text_Tag,userName}) => {
  let{state}=useContext(pageContext)

  
  return ( 
    <HeadButtonStyled 
      onClick={handleClick} 
      showButtons={state.gameMenuOpen}>
      {isHtml_text_Tag? 
      title

      : 
      
      <input ref={userName}
      type="text" 
      placeholder="Type Your Name" 
      style={inputStyle}/>}
      {/* if the tag is text then return text else return an input tag */}
    </HeadButtonStyled>
   );
}
 
export default HeadButtons;