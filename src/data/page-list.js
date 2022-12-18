import Page from "./page";
import pieceArray from "./piece-list";

const galleryID = Math.floor(Math.random() * pieceArray.length);
const galleryItem = pieceArray.find((element) => element.id === galleryID);
const galleryIcon = galleryItem.smallPath;

const pageArray = [];
pageArray.push(
  new Page(1, "About Me", "/images/thumbnails/headshot.jpg", "/about")
);
pageArray.push(new Page(2, "Gallery", galleryIcon, "/gallery"));
pageArray.push(
  new Page(3, "Resume", "/images/thumbnails/resumicon.svg", "/resume")
);

export default pageArray;
