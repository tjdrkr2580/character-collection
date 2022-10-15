import React, { useState } from "react";
import { useQuery } from "react-query";
import Characte from "./Characte";

const Character = () => {
  const [page, setPage] = useState(42);
  const fetchCharacters = async ({ queryKey }) => {
    const response = await fetch(
      `	https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  };
  const { data, status, isPreviousData } = useQuery(
    ["characters", page],
    fetchCharacters,
    {
      keepPreviousData: true,
    }
  );

  if (status === "loading") {
    return <div>Loading...</div>;
  } else if (status === "error") {
    return <div>error</div>;
  }

  console.log(data);

  return (
    <div className="characters">
      {data.results.map((character) => (
        <Characte character={character} />
      ))}
      <div>
        <button
          disabled={page === 1}
          onClick={() => {
            setPage((old) => old - 1);
          }}
        >
          Previous
        </button>
        <button
          disabled={isPreviousData === true || !data.info.next}
          onClick={() => {
            setPage((old) => old + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Character;
