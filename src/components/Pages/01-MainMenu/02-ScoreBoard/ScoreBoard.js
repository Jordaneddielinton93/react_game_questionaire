import { useContext } from "react";
import { pageContext } from "../../../App/App";

const ScoreBoard = () => {
  let{state}=useContext(pageContext)

  let displayText={
    display:`${state.gameMenuOpen?"none":"block"}`,
    fontSize:`${state.gameMenuOpen?"0":"2rem"}`,
    transition:"1s",
  }

  let ScoreBoardStyle={
    zIndex:10,
    color:"white",
    position: "absolute",
    width: `${state.gameMenuOpen?"0px":"100vw"}`,
    height: "50px",
    backgroundImage: "linear-gradient(to left, rgba(255,0,0,0), #0093E9)",
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    transition:"1s"
    }

  return ( 
    <div style={ScoreBoardStyle}>

      <h1 style={displayText} >Player : Sgt {state.playerName}</h1>
      <h1 style={displayText} >Score: {0} points</h1>
      <h1 style={displayText}>Top Score: {1}</h1>
    </div>
   );
}
 
export default ScoreBoard;

