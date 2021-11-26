import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './Components/Home/Home/home'
import Catalogo from "./Components/Nav/Catalog/catalog";
import Login from "./Components/Nav/User/Login/login";
import SignUp from "./Components/Nav/User/SignUp/singUp";
import ProductId from './Components/ProductoId/productoId'
function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path ='/' element={<Home/>}/>
         <Route path ='/:id' element={<ProductId/>}/>
         <Route path ='/catalogo' element={<Catalogo/>}/>
         <Route path ='/ingresar' element={<Login/>}/>
         <Route path ='/registrarme' element={<SignUp/>}/>
        </Routes>

    </BrowserRouter>
  );
}

export default App;
