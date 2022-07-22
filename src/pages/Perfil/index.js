import StackedExample from "../../components/nav/nav";
import BasicExample from "../../components/input/input";
import TextControlsExample from "../../components/textarea/textarea";
import {useState} from 'react'
import TypesExample from "../../components/button/button";
import Example from "../../components/modal/modal";
import "./perfil.css"

function Perfil() {
    const [descricao, setDescricao] = useState({descricao: '', foto: ''})

    const usuario = JSON.parse(localStorage.getItem('usuarioLogado'))

    console.log(usuario);

    function mudarDescricao(event){
        setDescricao(({...descricao, descricao: event.target.value }))
    }

    function mudarFoto(event){
        setDescricao(({...descricao,foto: event.target.value }))
    }


    const salvar = (event) =>{
        event.preventDefault()
        
        if(descricao.foto != ''){
            var adicionarFoto = usuario
            adicionarFoto.user.foto = descricao.foto
            localStorage.setItem("usuarioLogado",JSON.stringify(adicionarFoto))
        }
    
        if(descricao.descricao != ''){
            var adicionarDesc = usuario
            adicionarDesc.user.descricao = descricao.descricao
            localStorage.setItem("usuarioLogado",JSON.stringify(adicionarDesc))
        }


        var usuarios = JSON.parse(localStorage.getItem("usuarios"));
        for (let index = 0; index < usuarios.length; index++) {
            if(usuarios[index].user.email == usuario.user.email){
                if(descricao.foto != ''){
                    usuarios[index].user.foto = descricao.foto
                }
                if(descricao.descricao != ''){
                    usuarios[index].user.descricao = descricao.descricao
                }      
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
                                <img className="foto" src={usuario.user.foto}></img>
                            </div>
                            <div className="col-8">
                                <h3>{usuario.user.nome}</h3>
                                <h5>E-mail: {usuario.user.email}</h5>
                                <h5>Telefone: {usuario.user.telefone}</h5>
                                {usuario.user.descricao? <h5>Sobre Mim: {usuario.user.descricao}</h5> : null }
                            </div>
                        </div>
                        <hr />
                        <BasicExample change={(e)=>mudarFoto(e)} title1="Link para a foto" type="text" id="foto" class="mb-3" />
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