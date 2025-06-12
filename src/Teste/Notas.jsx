export default function Notas(props) {
  return (
    <>
      <label>
        <p>Nota {props.num}:</p>
        <input
          name={props.nome}
          type="text"
          value={props.valor}
          onChange={props.mudar}
        />
      </label>
    </>
  );
}
