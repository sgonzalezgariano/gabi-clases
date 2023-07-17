import "./App.css";
import { useState } from "react";
import rock from "./assets/rock.png";
import paper from "./assets/paper.png";
import scissors from "./assets/scissors.png";

function PiedraPapelTijera() {
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
        <a onClick={() => setP1Pick("Piedra")}>
          <img style={{padding: "10px"}} width="50px" src={rock} />
        </a>
        <a onClick={() => setP1Pick("Papel")}>
          <img style={{padding: "10px"}} width="50px" src={paper} />
        </a>
        <a onClick={() => setP1Pick("Tijera")}>
          <img style={{padding: "10px"}} width="50px" src={scissors} />
        </a>
      </div>
      <h2>Player 2</h2>
      <div className="p2-one-pick">
        <a onClick={() => setP2Pick("Piedra")}>
          <img style={{padding: "10px"}} width="50px" src={rock} />
        </a>
        <a onClick={() => setP2Pick("Papel")}>
          <img style={{padding: "10px"}} width="50px" src={paper} />
        </a>
        <a onClick={() => setP2Pick("Tijera")}>
          <img style={{padding: "10px"}} width="50px" src={scissors} />
        </a>
      </div>
      {console.log("P1 Pick", p1Pick, "P2 Pick", p2Pick)}
      <div className="result">
        <h2>Result</h2>
        <button onClick={() => checkPoints()}>Resultado</button>
        {console.log("P1 POINTS", p1Points, "P2 POINTS", p2Points)}
      </div>

      <div className="fin">
        <h2>End Game</h2>
        <button onClick={() => getWinner()}>Fin del juego</button>
        {console.log(winner)}
      </div>
    </div>
  );
}

export default PiedraPapelTijera;
