import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BasicExample from '../input/input';

function Example() {
    const [show, setShow] = useState(false);

    const [senha, setSenha] = useState({senhaAtual: '', senhaNova: '', confirmarSenha: ''})

    function senhaAtual(event){
        setSenha(({...senha, senhaAtual: event.target.value }))
    }

    function senhaNova(event){
        setSenha(({...senha,senhaNova: event.target.value }))
    }

    function confirmarSenha(event){
        setSenha(({...senha,confirmarSenha: event.target.value}))
    }

    const handleClose = () => setShow(false);

    const salvar = (event) =>{
        event.preventDefault()
        var usuario = JSON.parse(localStorage.getItem('usuarioLogado'))
        if(usuario.user.senha == senha.senhaAtual){
            if(senha.senhaNova == senha.confirmarSenha){
                usuario.user.senha = senha.senhaNova
                setShow(false);
                var usuarios = JSON.parse(localStorage.getItem("usuarios"));
                for (let index = 0; index < usuarios.length; index++) {
                    if(usuarios[index].user.email == usuario.user.email){
                        usuarios[index].user.senha = senha.senhaNova
                        break;
                    }       
                }
                localStorage.setItem("usuarios",JSON.stringify(usuarios))
                alert('Senha Alterada Com Sucesso')
            }else{
                alert('As Senhas não coincidem')
            }
        }else{
            alert('Senha atual inválida')
        }
        localStorage.setItem("usuarioLogado",JSON.stringify(usuario))

        
    }

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
            <BasicExample change={(e)=>senhaAtual(e)} title1="Senha atual" type="password" id="senha" class="mb-3"/>
            <BasicExample change={(e)=>senhaNova(e)} title1="Nova senha" type="password" id="senha" class="mb-3"/>
            <BasicExample change={(e)=>confirmarSenha(e)} title1="Confirmar senha" type="password" id="senha" class="mb-3"/>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Fechar
            </Button>
            <Button variant="primary" onClick={(e)=>salvar(e)}>
            Salvar alteração
            </Button>
        </Modal.Footer>
        </Modal>
    </>
    );
}

export default Example;