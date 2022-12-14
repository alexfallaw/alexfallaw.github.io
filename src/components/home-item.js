import React from "react";
import "../styles/home-item.css";
import { Link } from "react-router-dom";

export const HomeItem = ({ page }) => (
  <div className={`home-item ${page.id % 2 === 1 ? "square" : "circle"}`}>
    <Link to={page.link} className="img-bubble">
      <img src={page.thumbnail} alt="" className="home-thumbnail" />
    </Link>
    <Link to={page.link} className="name-holder">
      <h2 className="page-name">{page.name}</h2>
    </Link>
  </div>
);
