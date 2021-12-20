
import './App.css';
import { Routes, Route} from "react-router-dom";
import MainMenu from '../Pages/01-MainMenu/00-MainMenu';
import { useReducer } from 'react';
import { inistialState, reducer } from '../Hooks/useReducer';
import React from "react"
import useFetch from '../Hooks/useFetch';


export let pageContext= React.createContext()
function App() {

  let [state,dispatch]=useReducer(reducer,inistialState)
  let [data]=useFetch("https://react-questionnaire-space-game.herokuapp.com/scores")
  
  

  console.log(state)
  return (
    <div className="App">
      <pageContext.Provider value={{state,dispatch,data}}>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        {/* <Route path="about" element={} /> */}
      </Routes>
      </pageContext.Provider>
    </div>
  );
}

export default App;
