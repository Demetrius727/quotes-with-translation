import React, { useState } from "react";
import Citacao from "./components/Citacao";
import citacoes from "./data";

function App() {
  const [indice, setIndice] = useState(0);

  function proximaCitacao() {
    setIndice((indiceAtual) => (indiceAtual + 1) % citacoes.length);
  }

  return (
    <div className="container mt-5 border border-primary p-3 rounded shadow-lg bg-dark text-white">
      <Citacao texto={citacoes[indice].texto} autor={citacoes[indice].autor} />
      <button className="btn btn-success mt-2" onClick={proximaCitacao}>
        Next
      </button>
    </div>
  );
}

export default App;
