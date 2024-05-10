"use client";

import React from "react";

export default function IMC() {
  const [peso, setPeso] = React.useState("");
  const [altura, setAltura] = React.useState("");
  const [imc, setImc] = React.useState("");

  function handleClick() {
    const alturaMetro = Number(altura) / 100;
    const total = (Number(peso) / (alturaMetro * alturaMetro)).toFixed(2);
    setImc(total);
  }

  return (
    <div>
      <label htmlFor="peso">Peso (em kg)</label>
      <input
        type="text"
        id="peso"
        name="peso"
        value={peso}
        onChange={({ target }) => setPeso(target.value)}
      />
      <label htmlFor="altura">Altura (em cm )</label>
      <input
        type="text"
        id="altura"
        name="altura"
        value={altura}
        onChange={({ target }) => setAltura(target.value)}
      />
      <button onClick={handleClick}>Calcular</button>
      <p>IMC: {imc}</p>
    </div>
  );
}
