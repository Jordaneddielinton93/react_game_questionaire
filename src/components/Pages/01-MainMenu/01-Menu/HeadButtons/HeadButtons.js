import { useContext } from "react";
import { pageContext } from "../../../../App/App";
import { HeadButtonStyled } from "./HeadButtons.style";


  

  const HeadButtons = ({title,handleClick,isHtml_text_Tag,userName,fontsize}) => {
  let{state}=useContext(pageContext)

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
  
  return ( 
    <HeadButtonStyled 
      onClick={handleClick} 
      showButtons={state.gameMenuOpen}>
      {isHtml_text_Tag? 
      <h4 style={{fontSize:fontsize?"1.2rem":"2rem",}}>{title}</h4> 

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