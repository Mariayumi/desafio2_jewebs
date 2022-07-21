import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';

import Login from "./pages/Login/index";
import Cadastro from "./pages/Cadastro/index";
import Casal from "./pages/Casal/index";
import Perfil from "./pages/Perfil/index";
import Esqueci from "./pages/Esqueci/index";
import Nova from "./pages/Nova/index";

const Private = ({Item}) =>{

  const signed = JSON.parse(localStorage.getItem("usuarioLogado"))

  return signed ? <Item /> : <Login/>;
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/casal" element={<Private Item={Casal} />} />
          <Route path="/perfil" element={<Private Item={Perfil} />} />
          <Route path="/esquecisenha" element={<Esqueci />} />
          <Route path="/novasenha" element={<Nova />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
