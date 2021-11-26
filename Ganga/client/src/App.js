import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home/home";
import LoginSuccess from "./Components/Nav/User/LoginGoogle/loginSuccess";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/login/success" element={LoginSuccess} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
