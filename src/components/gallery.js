import PieceArray from "../data/piece-list";
import { GalleryItem } from "./gallery-item";

export function Gallery() {
  return (
    <div>
      <p>Gallery</p>

      <div>
        {PieceArray.map((piece) => (
          <GalleryItem piece={piece} />
        ))}
      </div>
    </div>
  );
}
