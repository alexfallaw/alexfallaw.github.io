import pieceArray from "../data/piece-list";
import { GalleryItem } from "./gallery-item";
import "../styles/gallery.css";
import "../styles/common.css";

export function Gallery() {
  return (
    <div className="bod">
      <div id="gallery-page" className="inner-bod">
        <div id="gal-title-holder">
          <h1 id="gallery-title">Gallery</h1>
        </div>
        <div id="item-holder">
          {pieceArray.map((piece, i) => (
            <GalleryItem piece={piece} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
