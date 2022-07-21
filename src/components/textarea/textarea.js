import Form from 'react-bootstrap/Form';

function TextControlsExample(props) {
    return (
    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{props.text}</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
    </Form>
    );
}

export default TextControlsExample;