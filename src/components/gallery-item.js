import React from "react";
import Card from "react-bootstrap/Card";

export const GalleryItem = (props) => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={props.piece.smallPath} />
    <Card.Body>
      <Card.Title>{props.piece.title}</Card.Title>
      <Card.Text>{props.piece.year}</Card.Text>
    </Card.Body>
  </Card>
);
