import { BrowserRouter, Routes, Route } from "react-router-dom";

import Conteudo from "./Conteudo/Conteudo";
import Home from "./Home/Home";
import Pagina_Teste from "./Teste/Pagina_Teste";
import Formulario from "./Formulário/Formulario";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Conteudo />}>
            <Route path="home" element={<Home />}></Route>
            <Route path="teste" element={<Pagina_Teste />}></Route>
            <Route path="formulario" element={<Formulario />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
