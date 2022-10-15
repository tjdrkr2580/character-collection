import React, { useState } from "react";
import { useQuery } from "react-query";
import Characte from "./Characte";

const Character = () => {
  const [page, setPage] = useState(1);
  const fetchCharacters = async ({ queryKey }) => {
    const response = await fetch(
      `	https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  };
  const { data, status } = useQuery(["characters", page], fetchCharacters);

  if (status === "loading") {
    return <div>Loading...</div>;
  } else if (status === "error") {
    return <div>error</div>;
  }

  return (
    <div className="characters">
      {data.results.map((character) => (
        <Characte character={character} />
      ))}
      <div>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Character;
