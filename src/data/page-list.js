import Page from "./page";

const pageArray = [];
pageArray.push(
  new Page(1, "About Me", "images/thumbnails/headshot.jpg", "/about")
);
pageArray.push(
  new Page(2, "Gallery", "images/jpg/color_study.jpg", "/gallery")
);
pageArray.push(
  new Page(3, "Resume", "images/thumbnails/resumicon.svg", "/resume")
);

export default pageArray;
