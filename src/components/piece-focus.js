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

  if (piece.title === "Rhetoric and Composition assignment") {
    pieceImg = <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F1vkuEB5av1mEyFzXfF6TyS%2FDPI-Geothermal-Energy-Storage%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-2%26viewport%3D507%252C184%252C0.1%26t%3DFffsfcpqyYtIIVTo-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D1%253A2%26mode%3Ddesign" allowfullscreen></iframe>;
    pieceBttnTxt = "Open Figma Prototype in New Tab";
    pieceLink = "https://www.figma.com/proto/1vkuEB5av1mEyFzXfF6TyS/DPI-Geothermal-Energy-Storage?page-id=0%3A1&type=design&node-id=1-2&viewport=507%2C184%2C0.1&t=FffsfcpqyYtIIVTo-1&scaling=scale-down-width&starting-point-node-id=1%3A2&mode=design"
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
