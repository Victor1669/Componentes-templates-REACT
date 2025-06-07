import { Link } from "react-router-dom";

import "./Paginacao_Mobile.css";

export default function Paginacao_Mobile() {
  return (
    <div id="mobilePagiCont">
      <nav className="mobileListLinks">
        <Link className="mobileBotao" to="/home">
          Home
        </Link>
        <Link className="mobileBotao" to="#">
          Teste
        </Link>
        <Link className="mobileBotao" to="/">
          Raiz
        </Link>
        <Link className="mobileBotao" to="#">
          Sobre
        </Link>
      </nav>
    </div>
  );
}
