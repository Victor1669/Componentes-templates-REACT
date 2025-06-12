import { useEffect } from "react";

import { Link } from "react-router-dom";

import "./Paginacao.css";

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
    document.getElementsByClassName("pageButton")[pagAtual].click();

    let botoes = document.querySelectorAll(".pageButton");
    botoes.forEach((btn) => {
      btn.addEventListener("click", () => {
        document
          .querySelector(".pageButton.pageButtonActive")
          ?.classList.remove("pageButtonActive");
        btn.classList.add("pageButtonActive");
      });
    });
  });

  return (
    <div id="pagiCont">
      <nav className="listLinks">
        {[pag1, pag2, pag3, pag4].map((pagina, key) => (
          <Link key={key} className="pageButton" to={pagina} onClick={mudaPag}>
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
