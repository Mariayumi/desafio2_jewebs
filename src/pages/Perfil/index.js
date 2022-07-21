import StackedExample from "../../components/nav/nav";
import TextControlsExample from "../../components/textarea/textarea";
import {useState} from 'react'
import TypesExample from "../../components/button/button";
import Example from "../../components/modal/modal";
import "./perfil.css"

function Perfil() {
    const [descricao, setDescricao] = useState({descricao: ''})

    const usuario = JSON.parse(localStorage.getItem('usuarioLogado'))

    console.log(usuario);

    const regex =  new RegExp()

    console.log(regex.test(descricao))

    function mudarDescricao(event){
        setDescricao(({descricao: event.target.value }))
    }


    const salvar = (event) =>{
        event.preventDefault()

        var adicionarDesc = usuario
        adicionarDesc.user.descricao = descricao.descricao
        localStorage.setItem("usuarioLogado",JSON.stringify(adicionarDesc))

        var usuarios = JSON.parse(localStorage.getItem("usuarios"));
        for (let index = 0; index < usuarios.length; index++) {
            if(usuarios[index].user.email == usuario.user.email){
                usuarios[index].user.descricao = descricao.descricao
                break;
            }       
        }
        localStorage.setItem("usuarios",JSON.stringify(usuarios))
        window.location.reload()
    }
    return(
        <>
        <div className="row col-12">
            <StackedExample />
            <div className="col-10 caixa">
                <div className="conteudo">
                    <div className="row col-12">
                        <div className="col-4 imagem">
                            <div className="foto"></div>
                        </div>
                        <div className="col-8">
                            <h3>{usuario.user.nome}</h3>
                            <h5>E-mail: {usuario.user.email}</h5>
                            <h5>Telefone: {usuario.user.telefone}</h5>
                            {usuario.user.descricao? <h5>Sobre Mim: {usuario.user.descricao}</h5> : null }
                        </div>
                    </div>
                    <hr />
                    <TextControlsExample change={(e)=>mudarDescricao(e)} text="Conte um pouco mais sobre você:"/>
                    <hr/>
                    <Example/>
                    <TypesExample click={(e)=>salvar(e)} botao="Salvar"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Perfil;