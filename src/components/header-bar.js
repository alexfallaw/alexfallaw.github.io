import "../styles/header-bar.css";
import "../styles/common.css";
import { Link } from "react-router-dom";

export function HeaderBar() {
  return (
    <div className="head">
      <div id="head-bar">
        <div id="back" className="head-icon">
          <img src="images/icons/home_light.svg" alt="" className="head-img" />
        </div>
        <Link to="/" id="logo" className="head-icon">
          <img src="images/icons/logo_light.svg" alt="" className="head-img" />
        </Link>
        <div id="menu" className="head-icon">
          <img
            src="images/icons/hamburger_light.svg"
            alt=""
            className="head-img"
          />
        </div>
      </div>
    </div>
  );
}
