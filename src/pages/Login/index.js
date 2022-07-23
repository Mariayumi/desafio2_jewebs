import "./login.css";
import BasicExample from "../../components/forms/forms";
import { useNavigate } from "react-router-dom";
import {useState} from "react"

function Login() {
    const [user, setUser] = useState({email: '', senha: ''});
    const navigate = useNavigate()

    function mudarEmail(event){
        setUser(({...user,email: event.target.value }))
    }
    
    function mudarSenha(event){
        setUser(({...user,senha: event.target.value }))
    }
    
    const Submit = (event) =>{
        event.preventDefault()
        const usuarios = JSON.parse(localStorage.getItem("usuarios"));
        usuarios?.filter((usuario) => {
            if(usuario.user.email == user.email & usuario.user.senha == user.senha){
                localStorage.setItem("usuarioLogado", JSON.stringify(usuario))   
            
            }
        }) 
        const usuarioEncontrado = JSON.parse(localStorage.getItem("usuarioLogado"))
        if(usuarioEncontrado){
            navigate('/perfil')
        }else{
            alert("Email e/ou senha incorretos")
        }
    }

    return(
        <div className="caixa">
            <div className="app">
                <h1>Log in</h1>
                <BasicExample click={(e)=>Submit(e)} changeSenha={(e)=>mudarSenha(e)} changeEmail={(e)=>mudarEmail(e)} id="botaologin"/>
                <hr></hr>
                <p><a href="/esquecisenha">Esqueceu a senha?</a></p>
                <p>Ainda não possui cadastro? <a href="/cadastro">Cadastre-se aqui!</a></p>
            </div>
        </div>
    );
};

export default Login;