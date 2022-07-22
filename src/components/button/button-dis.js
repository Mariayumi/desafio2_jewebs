import Button from 'react-bootstrap/Button';

function TypesExampleDis(props) {
    return (
    <>
        <Button variant="primary" onChange={props.funcao} onClick={props.click} id={props.id} type="button" className="botaologin" disabled>{props.botao}</Button>{' '}
    </>
    );
}

export default TypesExampleDis;