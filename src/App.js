import React from "react";
import Header from "./components/Header.js";
import { BrowserRouter as Route } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard.js";


export default function App() {
  return (
    <main>



      
      <Route>
        <Header /> 
        <CharacterCard/>
        <CharacterList />
        
      </Route>

      
    </main>
  );
}
