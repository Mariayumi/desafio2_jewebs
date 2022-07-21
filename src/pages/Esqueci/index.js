import TypesExample from "../../components/button/button";
import BasicExample from "../../components/input/input";

function Esqueci() {
    return(
        <div class="caixa">
            <div className="app">
                <h1>Esqueci a senha</h1>
                <form>
                    <BasicExample type="email" title1="E-mail" id="email" text="Mandaremos um e-mail para confirmar o reset da senha e criar uma nova"/>
                    <TypesExample botao="Mandar e-mail"/>
                </form>
            </div>
        </div>
    )
}

export default Esqueci;