import { useState } from "react";
import Article from "./components/Article";
import Nav from "./components/Nav";

function App() {
  const [articleProps, setArticleProps] = useState({
    title: "welcome",
    desc: "Hello, React & ajax",
  });

  const NavOnclick = () => {
    console.log("아년ㅇ");
  };

  return (
    <div className="App">
      <h1>Web</h1>
      <Nav onClick={NavOnclick} />
      <Article title={articleProps.title} desc={articleProps.desc} />
    </div>
  );
}

export default App;
