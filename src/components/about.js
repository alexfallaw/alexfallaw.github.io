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
            I'm a student at the University of Illinois Urbana-Champaign, pursuing a graphic design major and computer science minor. I've been passionate about art for almost a decade, experimenting with several different art forms over the years. I have also come to love coding, both web design and program development. I really enjoy the problem-solving involved in programming, and I appreciate the flexibility it gives me in manifesting my designs. I designed this website in Figma and implemented it in React js, and all of the gallery pieces are my own work.
          </p>
        </div>
      </Container>
    </div>
  );
}
