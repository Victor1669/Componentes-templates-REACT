import { Link, Outlet } from "react-router-dom";

import MPaginacao from "../../Componentes baixados/Paginação/Mobile/Paginacao_Mobile";
import DPaginacao from "../../Componentes baixados/Paginação/Desktop/Paginacao";
import Menu from "../../Componentes baixados/Menu/Menu";
import Toggle from "../../Componentes baixados/Toggle/Toggle";

export default function Conteudo() {
  return (
    <>
      <h1>Site Teste</h1>
      <Menu />
      <Toggle />
      <Outlet />
    </>
  );
}
