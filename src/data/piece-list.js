import Piece from "./piece";

const PieceMap = new Map();

PieceMap.set(
  1,
  new Piece(
    "Neon Hands",
    "2020",
    "Digital",
    "500 x 500 px",
    "This is a doodle of two hands holding hands",
    "Blah blah blah blah blah blah blah blah",
    "images/jpg/neon_hands.jpg",
    "image/png/neon_hands.png"
  )
);
PieceMap.set(
  2,
  new Piece(
    "Buttercup",
    "2020",
    "Digital",
    "400 x 600 px",
    "This is a drawing of some guy",
    "Blah blah blah blah blah blah blah blah",
    "images/jpg/buttercup_love.jpg",
    "image/png/buttercup_love.png"
  )
);
PieceMap.set(
  3,
  new Piece(
    "Rose Skull",
    "2019",
    "Digital",
    "500 x 500 px",
    "Personal project",
    "Blah blah blah blah blah blah blah blah",
    "images/jpg/rose_skull.jpg",
    "image/png/rose_skull.png"
  )
);

// const PieceArray = Array.from(PieceMap.values());

// export default PieceArray;

export default PieceMap;
