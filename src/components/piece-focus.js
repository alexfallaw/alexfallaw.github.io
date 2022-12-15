import React from "react";
import pieceArray from "../data/piece-list";
import { useParams } from "react-router-dom";
import "../styles/piece-focus.css";
import "../styles/common.css";

export function PieceFocus() {
  const { id } = useParams();
  let paramID = parseInt(id);
  const piece = pieceArray.find((element) => element.id === paramID);

  return (
    <div className="bod web-bg">
      <div id="focus-page" className="inner-bod">
        <div id="focus-bar">
          <h1 id="focus-title" className="text-alt-bg">
            {piece.title}
          </h1>
          <div id="focus-info" className="text-bg">
            <p className="focus-info-bit">{piece.year}</p>
            <p className="focus-info-bit">{piece.medium}</p>
            <p className="focus-info-bit">{piece.dimensions}</p>
          </div>
        </div>
        <div id="focus-img" className="img-bg">
          <img src={piece.largePath} alt={piece.altText} />
        </div>
        <div id="focus-bottom" className="text-bg">
          <p id="focus-text">{piece.longBlurb}</p>
        </div>
      </div>
    </div>
  );
}
