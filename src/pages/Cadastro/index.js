import BasicExample from "../../components/input/input";
import TypesExample from "../../components/button/button";
import TypesExampleDis from "../../components/button/button-dis";
import { useNavigate } from "react-router-dom";
import {useState} from 'react'
import Tooltipone from "../../components/tooltip/tooltip";
import { useForm } from "react-hook-form";

function Cadastro() {
    // validar email
    const [error, setError] = useState(null);
    
    const navigate = useNavigate()

    const [user, setUser] = useState({ nome: '', email: '', senha: '',nomeConjuge:'' ,emailConjuge: '', dataCasamento: '',enderecoSite: '', telefone: '' ,cidade: '', estado: ''});

    function mudarNome(event){
        setUser(({...user,nome: event.target.value }))
    }

    //function isValidEmail(email) {
    //    return /\S+@\S+\.\S+/.test(email);
    //}

    

    // validar email
    function mudarEmail(event){
        setUser(({...user,email: event.target.value }))

        //if (!isValidEmail(event.target.value)) {
        //    setError('Email inválido');

        //    document.getElementById('botaodis').setAttribute("disabled","disabled");

        //} else {
        //    setError(null);

        //    document.getElementById('botaodis').removeAttribute("disabled");
        //}
    }

    function mudarSenha(event){
        setUser(({...user,senha: event.target.value }))

        //if (!isValidPassword(event.target.value)) {
        //    setError('Senha inválido');

        //} else {
        //    setError(null);
        //}
    }

    function mudarNomeConjuge(event){
        setUser(({...user,nomeConjuge: event.target.value }))
    }

    function mudarEmailConjuge(event){
        setUser(({...user,emailConjuge: event.target.value }))

        //if (!isValidEmail(event.target.value)) {
        //    setError('Email Cônjuge inválido');

        //} else {
        //    setError(null);
        //}
    }

    function mudarDataCasamento(event){
        setUser(({...user,dataCasamento: event.target.value }))
    }

    function mudarEnderecoSite(event){
        setUser(({...user,enderecoSite: event.target.value }))
    }

    function mudarTelefone(event){
        setUser(({...user,telefone: event.target.value }))
    } 

    function mudarCidade(event){
        setUser(({...user,cidade: event.target.value }))
    }

    function mudarEstado(event){
        setUser(({...user,estado: event.target.value }))
    }

    function liberaBotao() {
        if (user.nome.length != 0 && user.email == user.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\)?$/i) && user.senha == user.senha.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/i) && user.emailConjuge == user.emailConjuge.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\)?$/i) && user.nomeConjuge.length != 0 && user.enderecoSite.length != 0 && user.cidade.length != 0 && user.estado.length != 0 && user.telefone.length >= 11 && user.dataCasamento.length != 0) {
            document.getElementById('botaodis').removeAttribute("disabled");
        }
        //else {
        //    document.getElementById('botaodis').setAttribute("disabled","disabled");
        //}
    }

    const Submit = (event) =>{

        event.preventDefault()

        const usuarios = JSON.parse(localStorage.getItem("usuarios"))
        const usuarioExistente = usuarios?.filter((usuario) => {
            if (usuario.user.email == user.email){
                return true
            }
            return false
        })

        if (usuarioExistente == true ) {
            alert("Usuário já existe")

        } else {
            var novoUsuario
            if (usuarios){
                novoUsuario = [...usuarios,{user}]
            }else{
                novoUsuario = [{user}]
            }
            localStorage.setItem("usuarios",JSON.stringify(novoUsuario))
            console.log(JSON.parse(localStorage.getItem("usuarios")));
            navigate('/')
        }
    }

    return(
        <div className="caixa">
            <div className="app">
                <h1>Cadastro</h1>
                <h4>Dados pessoais</h4>
                <form action="" className="row">
                    <BasicExample change={(e)=>mudarNome(e)} title1="Nome completo" type="text" id="name" class="mb-3 col-12"/>
                    <BasicExample change={(e)=>mudarTelefone(e)} title1="Telefone" type="number" id="telefone" class="mb-3 col-12" />
                    <BasicExample change={(e)=>mudarEmail(e)} title1="E-mail" type="email" id="email" class="mb-3 col-6" />
                    <BasicExample change={(e)=>mudarSenha(e)} title1="Senha" type="password" id="senha" class="mb-3 col-5" />
                    <div className="col-1">
                        <Tooltipone class=""/>
                    </div>
                </form>
                <hr />
                <h4>Dados do conjuge</h4> 
                <form action="">
                    <BasicExample change={(e)=>mudarNomeConjuge(e)} title1="Nome do seu amor" type="text" id="name" />
                    <BasicExample change={(e)=>mudarEmailConjuge(e)} title1="E-mail do seu amor" type="email" id="email" />
                </form>
                <hr />
                <h4>Dados do casamento</h4>
                <form action="">
                    <div class="row">
                        <BasicExample change={(e)=>mudarDataCasamento(e)} title1="Data do casamento" type="date" id="date" class="mb-3 col-12"/>
                        <BasicExample change={(e)=>mudarEstado(e)} title1="Estado" type="text" id="estado" class="mb-3 col-6"/>
                        <BasicExample change={(e)=>mudarCidade(e)} title1="Cidade" type="text" id="cidade" class="mb-3 col-6"/>
                        <BasicExample change={(e)=>mudarEnderecoSite(e)} title1="Endereço do site" type="text" id="local" text="http://localhost/seunome+nomedoseuamor" class="mb-3 col-12"/>
                    </div>
                </form>

                {error && <h5 style={{color: 'red'}}>{error}</h5>} 

                <TypesExampleDis id="botaodis" funcao={liberaBotao()} click={(e)=>Submit(e)} botao="Quero criar meu site!" className="botaologin"/>
                            
            </div>
        </div>

        
    )
}

export default Cadastro;