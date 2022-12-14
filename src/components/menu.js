import Dropdown from "react-bootstrap/Dropdown";
import "../styles/menu.css";
export function Menu() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-custom-1">
        <img
          src="images/icons/hamburger_light.svg"
          alt=""
          className="menu-img"
        />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/">Home</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="/about">About Me</Dropdown.Item>
        <Dropdown.Item href="/gallery">Gallery</Dropdown.Item>
        <Dropdown.Item href="/resume">Resume</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
