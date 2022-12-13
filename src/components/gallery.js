import pieceArray from "../data/piece-list";
import { GalleryItem } from "./gallery-item";
import "../styles/gallery.css";

export function Gallery() {
  return (
    <div id="gallery-page">
      <p id="gallery-title">Gallery</p>
      <div id="item-holder">
        {pieceArray.map((piece, i) => (
          <GalleryItem piece={piece} key={i} />
        ))}
      </div>
    </div>
  );
}
