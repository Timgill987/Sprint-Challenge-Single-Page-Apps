import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function SearchForm() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`).then(response => {
      console.log(response);
      const characters = response.data.results.filter(character =>
        character.name.toLowerCase().includes(query.toLowerCase())
      );

      setData(characters);
    });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <section className="search-form">
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
      <div>
        {data.map(data => {
          return (
            <CharacterCard
              name={data.name}
              gender={data.gender}
              species={data.species}
            />
          );
        })}
      </div>
    </section>
  );
}
