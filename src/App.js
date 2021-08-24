import React from "react";
import Calculadora from "./components/Calculadora";

const App = () => {
  return (
    <div className="container mt-2 text-center">
      <h1>
        Calculadora <small class="text-muted">PWA</small>
      </h1>
      <hr />
      <Calculadora />
    </div>
  );
};

export default App;
