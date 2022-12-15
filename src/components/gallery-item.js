import React from "react";
import "../styles/gallery-item.css";
import "../styles/common.css";

export const GalleryItem = ({ piece }) => (
  <div className={`gallery-item ${piece.id % 2 === 1 ? "right" : "left"}`}>
    <div className="tombstone">
      <div className="img-holder">
        <img
          src={piece.smallPath}
          className="gallery-img"
          alt={piece.altText}
        />
      </div>
      <div className="info">
        <p className="data">{piece.title}</p>
        <p className="data">{piece.year}</p>
        <p className="data">{piece.medium}</p>
      </div>
    </div>
    <div className="bottom-text">
      <p className="short-blurb">{piece.shortBlurb}</p>
    </div>
  </div>
);
