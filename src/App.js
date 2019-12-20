import React from "react";
import Header from "./components/Header.js";
import { BrowserRouter as Route } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard.js";
import SearchForm from "./components/SearchForm"
import WelcomePage from "./components/WelcomePage"

export default function App() {
  return (
    <main>

      <Route>
      <WelcomePage/>
      </Route>

      
      <Route>
        <Header /> 
        <SearchForm/>
        {/* <CharacterCard/>
        <CharacterList /> */}
        
      </Route>

      
    </main>
  );
}
