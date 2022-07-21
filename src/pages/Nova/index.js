import BasicExample from "../../components/input/input";

function Nova() {
    return(
        <div className="app">
            <h1>Esqueci a senha</h1>
            <form>
                <label>Senha</label>
                <BasicExample type="password"/>

                <label>Repetir senha</label>
                <BasicExample type="password"/>
            </form>
        </div>
    )
}

export default Nova;