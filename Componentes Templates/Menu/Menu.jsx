import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  const menuUsage = () => {
    document
      .getElementsByClassName("menuCont")[0]
      .classList.toggle("menuActive");
  };
  const transition = () => {
    document.startViewTransition();
  };
  return (
    <>
      <button onClick={menuUsage} className="settingButton"></button>
      <div className="menuCont">
        <div className="menuContent">
          <button onClick={menuUsage} className="settingButton"></button>
          {["/", "/home", "/teste", "/formulario"].map((pagina, index) => (
            <Link
              onClick={transition}
              className="btn btn-outline-dark"
              to={pagina}
              key={index}
            >
              {(pagina == "/"
                ? "Raiz"
                : pagina.slice(1, pagina.length)
              ).toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossOrigin="anonymous"
      ></link>
    </>
  );
}
