import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Campos(props) {

    return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>E-mail</Form.Label>
        <Form.Control onChange={props.changeEmail} type="email" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control onChange={props.changeSenha} type="password" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Lembre-se de mim" />
        </Form.Group>
        <Button onClick={props.click} variant="primary" type="button" link="/perfil" className="botaologin">
        Login
        </Button>
    </Form>
    );
}

export default Campos;