import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './Components/Home/Home/home'
import Catalogo from "./Components/Nav/Catalog/catalog";
import Login from "./Components/Nav/User/Login/login";
import SignUp from "./Components/Nav/User/SignUp/singUp";
<<<<<<< HEAD
import Categorias from "./Components/Nav/Categories/categories";
=======
import LoginSuccess from "./Components/Nav/User/LoginGoogle/loginSuccess";
>>>>>>> 3aae4c7f9f8046097882bddbb81cada63d6319f6

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path ='/' element={<Home/>}/>
         <Route path ='/catalogo' element={<Catalogo/>}/>
         <Route path ='/ingresar' element={<Login/>}/>
         <Route path ='/registrarme' element={<SignUp/>}/>
<<<<<<< HEAD
         <Route path ='/categorias/:id' element={<Categorias/>}/>
        </Routes>
=======
        <Route exact path="/login/success" element={LoginSuccess} />
      </Routes>
>>>>>>> 3aae4c7f9f8046097882bddbb81cada63d6319f6
    </BrowserRouter>
  );
}

export default App;
