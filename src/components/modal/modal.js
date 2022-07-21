import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BasicExample from '../input/input';

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
        <Button variant="primary" onClick={handleShow}>
        Alterar senha
        </Button>

        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
            <Modal.Title>Alterar senha</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <BasicExample title1="Senha atual" type="password" id="senha" class="mb-3"/>
            <BasicExample title1="Nova senha" type="password" id="senha" class="mb-3"/>
            <BasicExample title1="Confirmar senha" type="password" id="senha" class="mb-3"/>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Fechar
            </Button>
            <Button variant="primary" onClick={handleClose}>
            Salvar alteração
            </Button>
        </Modal.Footer>
        </Modal>
    </>
    );
}

export default Example;