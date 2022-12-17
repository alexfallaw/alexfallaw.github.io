import React from "react";
import "../styles/home-item.css";
import "../styles/common.css";
import { Link } from "react-router-dom";

export const HomeItem = ({ page }) => (
  <div className={`home-item ${page.id % 2 === 1 ? "left" : "right"}`}>
    <Link to={page.link} className="img-bubble img-bg">
      <img src={page.thumbnail} alt="" className="home-thumbnail" />
    </Link>
    <Link to={page.link} className="name-holder button-bg">
      <h2 className="page-name">{page.name}</h2>
    </Link>
  </div>
);
