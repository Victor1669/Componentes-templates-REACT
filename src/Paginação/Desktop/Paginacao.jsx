import "./Paginacao.css";
import { Link } from "react-router-dom";

export default function Paginacao() {
  return (
    <div id="pagiCont">
      <nav className="listLinks">
        <Link className="changePageButton" to="#">
          Previous
        </Link>
        <Link className="botao" to="/home">
          Home
        </Link>
        <Link className="botao" to="#">
          Teste
        </Link>
        <Link className="botao" to="/">
          Raiz
        </Link>
        <Link className="botao" to="#">
          Sobre
        </Link>
        <Link className="changePageButton" to="#">
          Next
        </Link>
      </nav>
    </div>
  );
}
