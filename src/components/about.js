import "../styles/about.css";
import "../styles/common.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function About() {
  return (
    <div className="bod web-bg">
      <Container id="about-page" className="inner-bod">
        <h1 id="about-title" className="text-alt-bg">
          About Me
        </h1>
        <Row id="top-bar">
          <Col id="headshot-holder" className="img-bg" xs={7}>
            <img
              src="/images/thumbnails/headshot.jpg"
              alt="Headshot of Alex Fallaw"
              id="about-headshot"
            />
          </Col>
          <Col id="about-info-holder" className="text-alt-bg" xs={5}>
            <h2 id="about-name">Alex Fallaw</h2>
            <h3 id="about-pronouns">(they/them)</h3>
          </Col>
        </Row>
        <div id="about-bio" className="text-bg">
          <p id="about-bio-text">
            I'm a graphic design and computer science student at the University
            of Illinois Urbana-Champaign. I've been passionate about art for
            almost a decade, experimenting with several different art forms over
            the years. I've recently gotten into coding, and I love the
            problem-solving and graphic design involved in coding a website.
          </p>
        </div>
      </Container>
    </div>
  );
}
