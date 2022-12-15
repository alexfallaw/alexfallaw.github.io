import "../styles/header-bar.css";
import "../styles/common.css";
import { Menu } from "./menu";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function HeaderBar() {
  let navigate = useNavigate();
  return (
    <div className="head img-bg">
      <div id="head-bar">
        <button onClick={() => navigate(-1)} id="back" className="head-icon">
          <img src="images/icons/back-arrow.svg" alt="" className="head-img" />
        </button>

        <Link to="/" id="logo" className="head-icon">
          <img src="images/icons/logo.svg" alt="" className="head-img" />
        </Link>
        <div id="menu" className="head-icon">
          <Menu />
        </div>
      </div>
    </div>
  );
}
