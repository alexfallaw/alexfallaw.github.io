import "../styles/web-resume.css";
import "../styles/common.css";

export function WebResume() {
  return (
    <div className="bod web-bg">
      <div id="web-resume-page" className="inner-bod">
        <div id="res-title-holder">
          <h1 id="res-title" className="text-alt-bg">
            Resume
          </h1>
        </div>
        <div id="res-holder" className="text-bg">
          <section id="head-sec" className="res-sec">
            <div id="res-name-holder">
              <h2 id="res-name">Alex Fallaw</h2>
            </div>
            <hr />
            <div id="res-subtitle-holder">
              <p id="res-subtitle">Graphic Designer</p>
            </div>
          </section>
          <section id="bio-sec" className="res-sec">
            <p id="res-bio">
              I'm a graphic design and computer science student at the
              University of Illinois Urbana-Champaign. I've been passionate
              about art for almost a decade, experimenting with several
              different art forms over the years. I've recently gotten into
              coding, and I love the problem-solving and graphic design involved
              in coding a website. I'm looking for an internship or entry-level
              job in web or graphic design.
            </p>
          </section>
          <section id="skills-sec" className="res-sec">
            <h3 id="res-skills" className="res-h">
              Skill Highlights
            </h3>
            <div className="two-columns">
              <div id="left-column" className="half-column">
                <ul>
                  <li>Digital design</li>
                  <li>Instructional graphic design</li>
                  <li>Website design</li>
                  <li>Wireframing</li>
                  <li>Collaborative story writing</li>
                  <li>
                    Adobe Creative Suite (Photoshop, Illustrator, InDesign)
                  </li>
                  <li>Figma</li>
                </ul>
              </div>
              <div id="right-column" className="half-column">
                <ul>
                  <li>SketchBook</li>
                  <li>WordPress</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>React JS</li>
                  <li>Git</li>
                </ul>
              </div>
            </div>
          </section>
          <section id="edu-sec" className="res-sec">
            <h3 id="res-edu" className="res-h">
              Education
            </h3>
            <div className="edu-block">
              <h4 className="edu-h">University of Illinois Urbana-Champaign</h4>
              <span className="edu-info">
                Graphic Design, BFA with minor in Computer Science
              </span>
              <span className="edu-info">2022 - Present</span>
            </div>
            <div className="edu-block">
              <h4 className="edu-h">University of Wisconsin Eau Claire</h4>
              <span className="edu-info">Graphic Communications</span>
              <span className="edu-info">2021 - 2022</span>
            </div>
            <div className="edu-block">
              <h4 className="edu-h">Parkland College</h4>
              <span className="edu-info">General Studies</span>
              <span className="edu-info">2020 - 2021</span>
            </div>
          </section>
          <section id="work-sec" className="res-sec">
            <h3 id="res-work" className="res-h">
              Work Experience
            </h3>
            <div className="work-block">
              <h4 className="work-h">Lowes Cashier</h4>
              <ul className="work-list">
                <li>
                  Responsibilities
                  <ul>
                    <li>Deliver excellent customer service at the register</li>
                    <li>Answer customer questions</li>
                  </ul>
                </li>
                <li>May 2021 - August 2021</li>
                <li>Champaign, IL</li>
                <li>Was awarded a service award for customer service</li>
              </ul>
            </div>
            <div className="work-block">
              <h4 className="work-h">Lowes Cashier</h4>
              <ul className="work-list">
                <li>
                  Responsibilities
                  <ul>
                    <li>Dishes</li>
                    <li>Vacuuming</li>
                    <li>General cleaning</li>
                  </ul>
                </li>
                <li>December 2019 - August 2021</li>
                <li>Champaign, IL</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
