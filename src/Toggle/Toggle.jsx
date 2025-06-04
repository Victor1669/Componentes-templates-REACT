import "./Toggle.css";

export default function Toggle({ ativar }) {
  return (
    <>
      <label className="switch">
        <input defaultChecked={ativar} type="checkbox" />
        <span className="slider_round"></span>
      </label>
    </>
  );
}
