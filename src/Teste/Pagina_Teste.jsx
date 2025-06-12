/* REACT OFICIAL */
import { useState } from "react";

import Toggle from "../../Componentes baixados/Toggle/Toggle";

import Notas from "./Notas";
import Resultado from "./Resultado";

export default function Pagina_Teste() {
  const [notas, setNotas] = useState({
    nota1: "0",
    nota2: "0",
    nota3: "0",
    nota4: "0",
  });
  const handleSetNotas = (e) => {
    if (e.target.getAttribute("name") == "nota1") {
      setNotas({
        nota1: e.target.value,
        nota2: notas.nota2,
        nota3: notas.nota3,
        nota4: notas.nota4,
      });
    } else if (e.target.getAttribute("name") == "nota2") {
      setNotas({
        nota1: notas.nota1,
        nota2: e.target.value,
        nota3: notas.nota3,
        nota4: notas.nota4,
      });
    } else if (e.target.getAttribute("name") == "nota3") {
      setNotas({
        nota1: notas.nota1,
        nota2: notas.nota2,
        nota3: e.target.value,
        nota4: notas.nota4,
      });
    } else if (e.target.getAttribute("name") == "nota4") {
      setNotas({
        nota1: notas.nota1,
        nota2: notas.nota2,
        nota3: notas.nota3,
        nota4: e.target.value,
      });
    }
  };
  return (
    <>
      <h1>Página teste</h1>
      {[1, 2, 3, 4].map((nota, key) => (
        <Notas
          nome={`nota${nota}`}
          valor={eval(`notas.nota${nota}`)}
          mudar={handleSetNotas}
          key={key}
        />
      ))}
      <Resultado
        result={
          parseFloat(notas.nota1) +
          parseFloat(notas.nota2) +
          parseFloat(notas.nota3) +
          parseFloat(notas.nota4)
        }
      />
    </>
  );
}
