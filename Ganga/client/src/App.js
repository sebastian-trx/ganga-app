import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './Components/Home/Home/home'
import Catalago from "./Components/Nav/Catalog/catalog";
import Login from "./Components/Nav/User/Login/login";
import SignUp from "./Components/Nav/User/SignUp/singUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path ='/' element={<Home/>}/>
         <Route path ='/catalogo' element={<Catalago/>}/>
         <Route path ='/ingresar' element={<Login/>}/>
         <Route path ='/registrarme' element={<SignUp/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
