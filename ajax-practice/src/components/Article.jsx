import React from "react";

const Article = ({ title, desc }) => {
  return (
    <article>
      <h2>{title}</h2>
      {desc}
    </article>
  );
};

export default Article;
