import Form from 'react-bootstrap/Form';



function BasicExample(props) {
    return (
    <>
        <Form.Group className={props.class} controlId={props.id}>
        <Form.Label>{props.title1}</Form.Label>
        <Form.Control value={props.value} onChange={props.change} type={props.type} placeholder="" data-minlength={props.length} name={props.name} required />
        <Form.Text className="text-muted">
            {props.text}
        </Form.Text>
        </Form.Group>
    </>
    );
}

export default BasicExample;