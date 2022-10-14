import React, { useState, useEffect } from "react";

const Character = () => {
  const [character, setCharacter] = useState([]);
  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    setCharacter(data.results);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      {character.map((character) => (
        <div>{character.name}</div>
      ))}
    </div>
  );
};

export default Character;
