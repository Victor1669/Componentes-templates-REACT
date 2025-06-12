export default function Resultado(props) {
  return (
    <>
      <label>
        <p>
          Resultado:{" "}
          {isNaN(props.result)
            ? "Há valor(es) não numérico(s)."
            : props.result >= 60
            ? "Aprovado."
            : "Reprovado."}
        </p>
      </label>
    </>
  );
}
