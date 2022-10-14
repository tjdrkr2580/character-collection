import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

const Character = () => {
  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    return response.json();
  };
  const { data, status } = useQuery("characters", fetchCharacters);

  if (status === "loading") {
    return <div>Loading...</div>;
  } else if (status === "error") {
    return <div>error</div>;
  }

  return (
    <div>
      {data.results.map((character) => (
        <div>{character.name}</div>
      ))}
    </div>
  );
};

export default Character;
