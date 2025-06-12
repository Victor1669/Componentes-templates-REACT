import { useEffect } from "react";

import { Link } from "react-router-dom";

import "./Paginacao_Mobile.css";

export default function Paginacao() {
  const pag1 = "/";
  const pag2 = "/home";
  const pag3 = "/formulario";
  const pag4 = "/teste";

  const pagAtual = 0;

  const mudaPag = () => {
    document.startViewTransition();
  };

  useEffect(() => {
    document.getElementsByClassName("mobilePageButton")[pagAtual].click();

    let botoes = document.querySelectorAll(".mobilePageButton");
    botoes.forEach((btn) => {
      btn.addEventListener("click", () => {
        document
          .querySelector(".mobilePageButton.mobilePageButtonActive")
          ?.classList.remove("mobilePageButtonActive");
        btn.classList.add("mobilePageButtonActive");
      });
    });
  });

  return (
    <div id="mobilePagiCont">
      <nav className="mobileListLinks">
        {[pag1, pag2, pag3, pag4].map((pagina, key) => (
          <Link
            key={key}
            className="mobilePageButton"
            to={pagina}
            onClick={mudaPag}
          >
            {pagina == pag1
              ? "Raiz"
              : pagina == pag2
              ? "Home"
              : pagina == pag3
              ? "Formulário"
              : "Teste"}
          </Link>
        ))}
      </nav>
    </div>
  );
}
