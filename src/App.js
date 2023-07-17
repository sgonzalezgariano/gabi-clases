
import "./App.css";
import { useState } from "react";

function App() {
  const [p1Pick, setP1Pick] = useState("");
  const [p2Pick, setP2Pick] = useState("");

  const [p1Points, setP1Points] = useState(0);
  const [p2Points, setP2Points] = useState(0);

  const [winner, setWinner] = useState("");

  const checkPoints = () => {
    if (p1Pick === "Piedra" && p2Pick === "Piedra") {
      console.log("Tie, nobody gets points");
      setP1Pick("");
      setP2Pick("");
    }
    if (p1Pick === "Piedra" && p2Pick === "Papel") {
      setP2Points((p2Points) => p2Points + 1);
      setP1Pick("");
      setP2Pick("");
    }
    if (p1Pick === "Piedra" && p2Pick === "Tijera") {
      setP1Points((p1Points) => p1Points + 1);
      setP1Pick("");
      setP2Pick("");
    }
    if (p1Pick === "Papel" && p2Pick === "Piedra") {
      setP1Points((p1Points) => p1Points + 1);
      setP1Pick("");
      setP2Pick("");
    }
    if (p1Pick === "Papel" && p2Pick === "Papel") {
      console.log("Tie, nobody gets points");
      setP1Pick("");
      setP2Pick("");
    }
    if (p1Pick === "Papel" && p2Pick === "Tijera") {
      setP2Points((p2Points) => p2Points + 1);
      setP1Pick("");
      setP2Pick("");
    }
    if (p1Pick === "Tijera" && p2Pick === "Piedra") {
      setP2Points((p2Points) => p2Points + 1);
      setP1Pick("");
      setP2Pick("");
    }
    if (p1Pick === "Tijera" && p2Pick === "Papel") {
      setP1Points((p1Points) => p1Points + 1);
      setP1Pick("");
      setP2Pick("");
    } else if (p1Pick === "Tijera" && p2Pick === "Tijera") {
      console.log("Tie, nobody gets points");
      setP1Pick("");
      setP2Pick("");
    }
  };

  const getWinner = () => {
    if (p1Points > p2Points) {
      setWinner("PLAYER 1 WINS!!!!");
      console.clear();
      setP1Points(0);
      setP2Points(0);
    }
    if (p2Points > p1Points) {
      setWinner("PLAYER 2 WINS!!!!");
      console.clear();
      setP1Points(0);
      setP2Points(0);
    }
  };

  return (
    <div className="App">
      <div className="p1-one-pick">
        <h2>Player 1</h2>
        <button onClick={() => setP1Pick("Piedra")}>Piedra</button>
        <button onClick={() => setP1Pick("Papel")}>Papel</button>
        <button onClick={() => setP1Pick("Tijera")}>Tijera</button>
      </div>
      <h2>Player 2</h2>
      <div className="p2-one-pick">
        <button onClick={() => setP2Pick("Piedra")}>Piedra</button>
        <button onClick={() => setP2Pick("Papel")}>Papel</button>
        <button onClick={() => setP2Pick("Tijera")}>Tijera</button>
      </div>

      <div className="result">
        <h2>Result</h2>
        <button onClick={() => checkPoints()}>Resultado</button>
        {console.log("P1 Pick", p1Pick, "P2 Pick", p2Pick)}
        {console.log("P1 POINTS", p1Points, "P2 POINTS", p2Points)}
      </div>

      <div className="fin">
        <button onClick={() => getWinner()}>Fin del juego</button>
        {console.log(winner)}
      </div>
    </div>
  );
}

export default App;
