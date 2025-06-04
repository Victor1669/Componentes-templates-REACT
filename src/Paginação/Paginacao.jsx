import { Link } from "react-router-dom";
import "../CSS/Paginacao.css";

function Paginacao() {
  return (
    <div id="pagiCont">
      <nav>
        <ul>
          <button>Previous</button>
          <Link className="botao" to="/">
            1
          </Link>
          <Link className="botao" to="/Pagina_2">
            2
          </Link>
          <Link className="botao" to="/Teste">
            3
          </Link>
          <button>Next</button>
        </ul>
      </nav>
    </div>
  );
}

// export { Paginacao };
