import Button from 'react-bootstrap/Button';

function TypesExample(props) {
    return (
    <>
        <Button variant="primary" onClick={props.click} type="button" id={props.id} funcao={props.func} className="botaologin">{props.botao} </Button>{' '}
    </>
    );
}

export default TypesExample;