import StackedExample from "../../components/nav/nav";
import TextControlsExample from "../../components/textarea/textarea";
import TypesExample from "../../components/button/button";
import {useState} from "react"
import BasicExample from "../../components/input/input";

function Casal() {

    const [desc, setDesc] = useState({descricaoConjuge: '', fotoconjuge: ''})

    const usuario = JSON.parse(localStorage.getItem('usuarioLogado'))

    console.log(usuario);

    function mudarDescricao(event){
        setDesc(({...desc , descricaoConjuge: event.target.value }))
    }
    function mudarFotoconj(event){
        setDesc(({...desc, fotoconjuge: event.target.value }))
    }

    const salvar = (event) =>{
        event.preventDefault()

        if(desc.descricaoConjuge != ''){
            var adicionarDesc = usuario
            adicionarDesc.user.descricaoConjuge = desc.descricaoConjuge
            localStorage.setItem("usuarioLogado",JSON.stringify(adicionarDesc))
        }
        
        if(desc.fotoconjuge != ''){
            var adicionarFotoConj = usuario
            adicionarFotoConj.user.fotoconjuge = desc.fotoconjuge
            localStorage.setItem("usuarioLogado",JSON.stringify(adicionarFotoConj))
        }
        
        var usuarios = JSON.parse(localStorage.getItem("usuarios"));
        for (let index = 0; index < usuarios.length; index++) {
            if(usuarios[index].user.email == usuario.user.email){
                if(desc.descricaoConjuge != ''){
                usuarios[index].user.descricaoConjuge = desc.descricaoConjuge}
                if(desc.fotoconjuge != ''){
                usuarios[index].user.fotoconjuge = desc.fotoconjuge}
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
                        <img className="foto" src={usuario.user.fotoconjuge}></img>
                        </div>
                        <div className="col-8">
                                <h3>{usuario.user.nomeConjuge}</h3>
                                <h5>E-mail conjuge: {usuario.user.emailConjuge}</h5>
                                <h5>Data do casamento: {usuario.user.dataCasamento}</h5>
                                <h5>Estado: {usuario.user.estado}</h5>
                                <h5>Cidade: {usuario.user.cidade}</h5>
                                <h5>Endereço do site: {usuario.user.enderecoSite}</h5>
                                {usuario.user.descricaoConjuge? <h5>Sobre Mim: {usuario.user.descricaoConjuge}</h5> : null }
                        </div>
                    </div>
                    <hr />
                    <BasicExample change={(e)=>mudarFotoconj(e)} title1="Link para a foto do conjuge" type="text" id="fotoconjuge" class="mb-3" />
                    <TextControlsExample change={(e)=> mudarDescricao(e)} text="Texto descritivo:"/>
                    <hr/>
                    <TypesExample click={(e)=> salvar(e)} botao="Salvar"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Casal;