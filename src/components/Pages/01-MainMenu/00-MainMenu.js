import { MainMenuStyled } from "./00-MainMenu.style";
import Headings from "./01-Menu/Headings";
import Planet from "./01-Planet/Planet";
import QuestionsBoard from "./02-GameQuestions/QuestionsBoard";
import ScoreBoard from "./02-ScoreBoard/ScoreBoard";
import GameBoard from "./03-GameBoard/GameBoard";


const MainMenu = () => {
  return ( 
    <MainMenuStyled>
      <ScoreBoard/>
      <Headings/>
      <Planet/>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <QuestionsBoard/>
      <GameBoard/>
     
    </MainMenuStyled>
   );
}
 
export default MainMenu;