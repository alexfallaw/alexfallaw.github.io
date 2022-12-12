import PieceMap from "../data/piece-list";
import { GalleryItem } from "./gallery-item";

export function Gallery() {
  return (
    <div>
      <p>Gallery</p>

      <div>
        {/* {for (const [key, value] of PieceMap) {
            <GalleryItem piece={value} key={key} />;
        }} */}
        PieceMap.forEach((data) => {<p>{data}</p>})
        {worksArray.map((work) => (
          <GalleryItem work={work} />
        ))}
      </div>
    </div>
  );
}
