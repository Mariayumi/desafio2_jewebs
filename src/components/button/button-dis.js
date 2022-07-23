import Button from 'react-bootstrap/Button';

function TypesExampleDis(props) {
    return (
    <>
        <Button variant="primary" onChange={props.funcao} onClick={props.click} id="botaologin" type="button" className="botaologin" >{props.botao}</Button>{' '}
    </>
    );
}

export default TypesExampleDis;