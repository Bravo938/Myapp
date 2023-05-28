import Dropdown from 'react-bootstrap/Dropdown';
import img from '../Images/img';
import '../Styles/Menu.css';

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <img src={img.img1} height={50} width={70} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Inicio</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Quienes Somos</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Mas Sobre Nosotros</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;