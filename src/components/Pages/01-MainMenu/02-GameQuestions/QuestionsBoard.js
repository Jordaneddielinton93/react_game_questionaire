import { useContext } from "react";
import { pageContext } from "../../../App/App";
import { questionsArray } from "./QuestionsArray";

const QuestionsBoard = () => {
  let{state}=useContext(pageContext)

  let displayText={
    display:`${state.gameMenuOpen?"none":"block"}`,
    fontSize:`${state.gameMenuOpen?"0":"2rem"}`,
    transition:"1s",
  }

  let QuestionBoardStyle={
    zIndex:10,
    color:"white",
    position: "absolute",
    bottom:0,
    width: `${state.gameMenuOpen?"0px":"100vw"}`,
    height: "50px",
    backgroundImage: "linear-gradient(to left, rgba(255,0,0,0), #0093E9)",
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    transition:"1s"
    }

  return ( 
    <div style={QuestionBoardStyle}>

      <h1 style={displayText} >{questionsArray[state.questionNumber].question}</h1>
    </div>
   );
}
 
export default QuestionsBoard;