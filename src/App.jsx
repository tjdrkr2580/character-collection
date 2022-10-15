import "./app.css";
import Character from "./components/Character";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Rick and Morty</h1>
        <Character />
      </div>
    </div>
  );
}

export default App;
