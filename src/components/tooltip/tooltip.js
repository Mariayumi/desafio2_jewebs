import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function Tooltipone(props) {
    return (
    <>
        {['bottom'].map((placement) => (
        <OverlayTrigger
            key={placement}
            placement={placement}
            overlay={
            <Tooltip id={`tooltip-${placement}`} >
                <h6>Sua senha deve ter no mínimo:</h6>
                    <ul>
                        <li>8 caracteres</li>
                        <li>1 caractere maiúsculo</li>
                        <li>1 caractere minúsculo</li>
                        <li>1 caractere numérico</li>
                        <li>1 caractere especial (Caracteres aceitos: ?!@#$%^&*)</li>
                    </ul>
            </Tooltip>
            }
        >
            <Button variant="secondary" size="sm" className={props.class}>?</Button>
        </OverlayTrigger>
        ))}
    </>
    );
}

export default Tooltipone;