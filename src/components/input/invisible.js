import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function PlaintextExample(props) {
    return (
    <Form>
        <Form.Group as={Row} className={props.class} controlId={props.id}>
        <Form.Label column sm={props.sm}>
            <h5>{props.title}</h5>
        </Form.Label>
        <Col sm={props.sm2}>
            <Form.Control plaintext defaultValue="" placeholder={props.place} type={props.type}/>
        </Col>
        </Form.Group>
    </Form>
    );
}

export default PlaintextExample;