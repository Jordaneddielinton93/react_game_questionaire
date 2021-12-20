import { useContext } from "react";
import { pageContext } from "../../../App/App";
import useFetch from "../../../Hooks/useFetch";

const ScoreBoard = () => {
  let{state}=useContext(pageContext)
  let [data]=useFetch("https://react-questionnaire-space-game.herokuapp.com/scores")

  let topScore=data.sort(function(a, b){return b.user_score-a.user_score})

  console.log(topScore)
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
    height: "7.5vh",
    backgroundImage: "linear-gradient(to left, rgba(255,0,0,0), #0093E9)",
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    transition:"1s",
    boxShadow: "0 0 60px 10px rgba(0,147,233, 0.72), -14px -15px 40px -10px rgba(128,208,199, 0.23)"
    
    }

  return ( 
    <div style={ScoreBoardStyle}>

      <h1 style={displayText} >Player : Sgt {state.playerName}</h1>
      <h1 style={displayText} >Score: {state.score} points</h1>
      <h1 style={displayText}>Top Score: {topScore.length&&topScore[0].user_score}</h1>
    </div>
   );
}
 
export default ScoreBoard;

