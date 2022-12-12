import React from "react";
import "../styles/galleryItem.css";

export const GalleryItem = (props) => (
  <div className={`gallery-item ${props.key % 2 === 0 ? "left" : "right"}`}>
    <div className="tombstone">
      <div className="img-holder">
        <img
          src={props.piece.smallPath}
          className="gallery-img"
          alt={props.piece.altText}
        />
      </div>
      <div className="info">
        <p className="data">{props.piece.title}</p>
        <p className="data">{props.piece.year}</p>
        <p className="data">{props.piece.medium}</p>
      </div>
    </div>
    <div className="bottom-text">
      <p className="short-blurb">{props.piece.shortBlurb}</p>
    </div>
  </div>
);
