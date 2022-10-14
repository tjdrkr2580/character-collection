import React, { useEffect, useState } from "react";

export let id = 0;

const Nav = () => {
  const [lists, setlists] = useState([]);

  const OnClickId = (e) => {
    e.preventDefault();
    id = e.target.dataset.id;
  };
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
            <a href={lists.id} data-id={lists.id} onClick={OnClickId}>
              {lists.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
