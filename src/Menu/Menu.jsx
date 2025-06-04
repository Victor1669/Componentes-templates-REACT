import "./Menu.css";

let ativar = true;

function btnClick() {
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  let menuCont = document.getElementById("menu");

  if (ativar == false) {
    menuCont.setAttribute(
      "style",
      `
      translate: 0vw;
      `
    );
    btn2.setAttribute(
      "style",
      `
      rotate: 180deg;
      `
    );
    ativar = true;
  } else {
    menuCont.setAttribute(
      "style",
      `
      translate: -18vw;
      `
    );
    ativar = false;
  }
}

function Btn1() {
  return (
    <>
      <button
        className="botoes"
        onClick={btnClick}
        id="btn1"
        type="button"
      ></button>
    </>
  );
}

function Menu() {
  return (
    <div id="menuCont">
      <div id="menu">
        <nav>
          <button
            className="botoes"
            onClick={btnClick}
            id="btn2"
            type="button"
          ></button>
          <a className="btn btn-outline-dark" href="/">
            Home
          </a>
          <a className="btn btn-outline-dark" href="/Pagina_2">
            Página 2
          </a>
          <a className="btn btn-outline-dark" href="/Teste">
            Testes
          </a>
        </nav>
      </div>
    </div>
  );
}

export { Menu, Btn1 };
