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
  const { data, isPreviousData, isFetching, isError } = useQuery(
    ["characters", page],
    fetchCharacters,
    {
      keepPreviousData: true,
    }
  );

  if (isFetching) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>error</div>;
  }

  return (
    <div className="characters">
      {data.results.map((character) => (
        <Characte character={character} key={character.id} />
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
