class Piece {
  constructor(
    title,
    year,
    medium,
    dimensions,
    shortBlurb,
    longBlurb,
    smallPath,
    largePath
  ) {
    this.title = title;
    this.year = year;
    this.medium = medium;
    this.dimensions = dimensions;
    this.shortBlurb = shortBlurb;
    this.longBlurb = longBlurb;
    this.smallPath = smallPath;
    this.largePath = largePath;
  }
}

export default Piece;
