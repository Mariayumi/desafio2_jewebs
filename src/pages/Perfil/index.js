import StackedExample from "../../components/nav/nav";
import TextControlsExample from "../../components/textarea/textarea";
import TypesExample from "../../components/button/button";
import Example from "../../components/modal/modal";
import "./perfil.css"

function Perfil() {

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
                            <h3>Nome completo</h3>
                            <h5>E-mail:</h5>
                            <h5>Telefone:</h5>
                        </div>
                    </div>
                    <hr />
                    <TextControlsExample text="Conte um pouco mais sobre você:"/>
                    <hr/>
                    <Example/>
                    <TypesExample botao="Salvar"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Perfil;