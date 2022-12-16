import React from "react";
import "../styles/gallery-item.css";
import "../styles/common.css";

export const GalleryItem = ({ piece }) => (
  <div className={`gallery-item ${piece.id % 2 === 1 ? "right" : "left"}`}>
    <div className="tombstone">
      <div className="img-holder img-bg">
        <img
          src={piece.smallPath}
          className="gallery-img"
          alt={piece.altText}
        />
      </div>
      <div className="info text-alt-bg">
        <h2 className="data">{piece.title}</h2>
        <p className="data">{piece.year}</p>
        <p className="data">{piece.medium}</p>
      </div>
    </div>
    <div className="bottom-text text-bg">
      <p className="short-blurb">{piece.shortBlurb}</p>
      <a href={`/piece/${piece.id}`} id="more-button" className="button">
        <img src="/images/icons/plus.svg" alt="more" id="more-plus" />
      </a>
    </div>
  </div>
);
