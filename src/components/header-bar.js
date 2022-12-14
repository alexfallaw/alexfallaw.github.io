import "../styles/header-bar.css";
import "../styles/common.css";
import { Menu } from "./menu";
import { Link } from "react-router-dom";

export function HeaderBar() {
  return (
    <div className="head">
      <div id="head-bar">
        <div id="back" className="head-icon">
          <img src="images/icons/back-arrow.svg" alt="" className="head-img" />
        </div>
        <Link to="/" id="logo" className="head-icon">
          <img src="images/icons/logo_light.svg" alt="" className="head-img" />
        </Link>
        <div id="menu" className="head-icon">
          <Menu />
        </div>
      </div>
    </div>
  );
}
