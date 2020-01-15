import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function GetCharacterList() {
  // TODO: Add useState to track data from useEffect
  const [Schwifty, setSchwifty] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response.data.results);
        setSchwifty(response.data.results);
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, []);

  //   // TODO: Add API Request here - must run in `useEffect`
  //   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

  return (
    <section>
       {Schwifty.map(item => (

         <CharacterCard
           key={item}
           name={item.name}
           gender={item.gender}
           species={item.species}
         />
      ))}
    </section>
  );
}
