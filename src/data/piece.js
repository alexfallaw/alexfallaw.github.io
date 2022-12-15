class Piece {
  constructor(
    id = 0,
    title = "Title missing",
    year = "Year missing",
    medium = "Medium missing",
    dimensions = "Dimensions missing",
    shortBlurb = "Short blurb missing",
    longBlurb = "Long blurb missing",
    smallPath = "/images/jpg/missing.jpg",
    largePath = "/images/png/missing.png",
    altText = "Alt text missing",
    fileSize = "unknown file size"
  ) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.medium = medium;
    this.dimensions = dimensions;
    this.shortBlurb = shortBlurb;
    this.longBlurb = longBlurb;
    this.smallPath = smallPath;
    this.largePath = largePath;
    this.altText = altText;
    this.fileSize = fileSize;
  }
}

export default Piece;
