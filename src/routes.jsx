import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaBase from "./pages/PaginaBase";
import Inicio from "./pages/Inicio";
import Registro from "./pages/Registro";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />} >
          <Route index element={<Inicio />}></Route>
          <Route path="registro" element={<Registro />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;