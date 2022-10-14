import React, { useEffect, useState } from "react";

const Nav = () => {
  const [lists, setlists] = useState([]);
  useEffect(() => {
    fetch("list.json")
      .then(function (result) {
        return result.json();
      })
      .then(function (json) {
        setlists(json);
      });
  }, []);
  return (
    <nav>
      <ul>
        {lists.map((lists) => (
          <li key={lists.id}>
            <a href={lists.id}>{lists.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
