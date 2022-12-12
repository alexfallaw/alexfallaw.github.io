import React from "react";

export const GalleryItem = (props) => (
  <div class>
    <p>Title: {props.piece.title}</p>
    <p>Key: {props.key}</p>
  </div>
);
