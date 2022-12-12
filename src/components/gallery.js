import pieceArray from "../data/piece-list";
import { GalleryItem } from "./gallery-item";

export function Gallery() {
  return (
    <div>
      <p>Gallery</p>
      <div>
        {pieceArray.map((piece, i) => (
          <GalleryItem piece={piece} key={i} />
        ))}
      </div>
    </div>
  );
}
