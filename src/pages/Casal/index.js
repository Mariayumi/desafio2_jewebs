import StackedExample from "../../components/nav/nav";
import TextControlsExample from "../../components/textarea/textarea";
import TypesExample from "../../components/button/button";

function Casal() {
    return(
        <>
        <div className="row col-12">
            <StackedExample />
            <div className="col-10 caixa">
                <div className="conteudo">
                    <div className="row col-12">
                        <div className="col-4 imagem">
                            <div className="foto">

                            </div>
                        </div>
                        <div className="col-8">
                                <h3>Nome do conjuge</h3>
                                <h5>Data do casamento:</h5>
                                <h5>Estado:</h5>
                                <h5>Cidade:</h5>
                                <h5>Endereço do site:</h5>
                        </div>
                    </div>
                    <hr />
                    <TextControlsExample text="Texto descritivo:"/>
                    <hr/>
                    <TypesExample botao="Salvar"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Casal;