import { BrowserRouter, Routes, Route } from "react-router-dom";

import Conteudo from "./Conteudo/Conteudo";
import Home from "./Home/Home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Conteudo />}>
            <Route path="home" element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
