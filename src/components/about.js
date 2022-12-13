import "../styles/about.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function About() {
  return (
    <Container id="about-page">
      <Row id="top-bar">
        <Col id="headshot-holder" xs={7}>
          <img
            src="images/thumbnails/headshot.jpg"
            alt="Headshot of Alex Fallaw"
            id="about-headshot"
          />
        </Col>
        <Col id="about-title-holder" xs={5}>
          <h2 id="about-title">Alex Fallaw</h2>
          <h3 id="about-pronouns">(they/them)</h3>
        </Col>
      </Row>
      <div id="about-bio">
        <p id="about-bio-text">Blah blah blah blah blah</p>
      </div>
    </Container>
  );
}
