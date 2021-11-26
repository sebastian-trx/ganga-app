import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './Components/Home/Home/home'
import Catalog from './Components/Nav/Catalog/catalog'
function App() {
  return (
    <BrowserRouter>
      <Routes>

      <Route path ='/' element={<Home/>}/>
      <Route path='/catalog' element={<Catalog/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
