import React from "react";
import pieceArray from "../data/piece-list";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/piece-focus.css";
import "../styles/common.css";

export function PieceFocus() {
  const { id } = useParams();
  let paramID = parseInt(id);
  const piece = pieceArray.find((element) => element.id === paramID);

  let pieceImg = (
    <img src={piece.smallPath} alt={piece.altText} id="focus-img" />
  );
  let pieceBttnTxt = "Open HD Image in New Tab";
  let pieceLink = piece.largePath;

  if (piece.title === "Frog Factory") {
    pieceImg = <img src={piece.largePath} alt={piece.altText} id="focus-img" />;
    pieceBttnTxt = "Open p5.js Interactive in New Tab";
    pieceLink = "https://editor.p5js.org/alexfallaw/full/dHOEg4YCO";
  }

  return (
    <div className="bod web-bg">
      <Container id="focus-page" className="inner-bod">
        <Row id="focus-bar">
          <Col id="focus-title-holder" className="text-alt-bg">
            <h1 id="focus-title">{piece.title}</h1>
          </Col>
          <Col id="focus-info-holder" className="text-bg">
            <div id="focus-info">
              <p className="focus-info-bit">{piece.year}</p>
              <p className="focus-info-bit">{piece.medium}</p>
              <p className="focus-info-bit">{piece.dimensions}</p>
            </div>
          </Col>
        </Row>
        <a href={pieceLink} target="_blank" rel="noreferrer">
          <div id="focus-img-holder" className="img-bg">
            {pieceImg}
          </div>
        </a>
        <div id="focus-bottom" className="text-bg">
          <p id="focus-text">{piece.longBlurb}</p>
          <Button
            href={pieceLink}
            target="_blank"
            id="focus-button"
            className="button-bg"
          >
            <p>{pieceBttnTxt}</p>
            <p>[{piece.fileSize}]</p>
          </Button>
        </div>
      </Container>
    </div>
  );
}
