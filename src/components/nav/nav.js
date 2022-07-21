import Nav from 'react-bootstrap/Nav';
import "./nav.css"
import { useNavigate } from "react-router-dom";



function StackedExample() {
    const navigate = useNavigate()
    const logout = (event) =>{
        event.preventDefault()
        localStorage.removeItem("usuarioLogado")
        navigate('/')
    }
    return (
    <Nav defaultActiveKey="/home" className="flex-column col-2 navbar">
        <div>
            <Nav.Link href="/Perfil" className="linknav"><i class="fa-solid fa-user"></i>Perfil</Nav.Link>
            <Nav.Link href="/Casal" className="linknav"><i class="fa-solid fa-children"></i>Informações do casal</Nav.Link>
            <Nav.Link onClick={(e) => logout(e)} className="linknav"><i class="fa-solid fa-arrow-right-from-bracket"></i>Sair</Nav.Link>
        </div>
    </Nav>
    );
}

export default StackedExample;