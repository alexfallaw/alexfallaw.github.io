import "../styles/web-resume.css";

export function WebResume() {
  return (
    <div className="bod web-bg">
      <div id="web-resume-page" className="inner-bod">
        <h2>Alex Fallaw</h2>
        <p className="tagline">Graphic Designer</p>
        <hr />
        <p className="description">
          I'm a graphic design and computer science student at the University of
          Illinois Urbana-Champaign. I've been passionate about art for almost a
          decade, experimenting with several different art forms over the years.
          I've recently gotten into coding, and I love the problem-solving and
          graphic design involved in coding a website. I'm looking for an
          internship or entry-level job in web or graphic design.
        </p>
        <h3>Skill Highlights</h3>
        <div className="skills">
          <ul className="Skill-list">
            <li>Digital design</li>
            <li>Instructional graphic design</li>
            <li>Website design</li>
            <li>Wireframing</li>
            <li> Collaborative story writing</li>
            <li>Adobe Creative Suite (Photoshop, Illustrator, InDesign)</li>
            <li>Figma</li>
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

        <section className="education">
          <h3>Education</h3>
          <ul>
            <li>
              <span className="institution">
                University of Illinois Urbana-Champaign
              </span>
              <span className="program">
                Graphic Design, BFA with minor in Computer Science
              </span>
              <span className="time-range">2022-present</span>
            </li>
            <li>
              <span className="institution">
                University of Wisconsin Eau Claire
              </span>
              <span className="program">Graphic Communications</span>
              <span className="time-range">2021-2022</span>
            </li>
            <li>
              <span className="institution">Parkland College</span>
              <span className="program">General Studies</span>
              <span className="time-range">2020-2021</span>
            </li>
          </ul>
        </section>
        <section className="experience">
          <ul className="experience-list">
            <li>
              <span className="job">Lowes Casier</span>
              <section className="responsibilites">
                <h4>Responsibilites:</h4>
                <ul className="responsibilities-list">
                  <li>Deliver excellent customer service at the register</li>
                  <li>Answer customer questions</li>
                </ul>
              </section>
              <span className="time-range">May 2021 - August 2021</span>
              <span className="location">Location: Chamapaign, IL</span>
              <span className="note">
                Was awarded a service award for customer service
              </span>
            </li>
            <li>
              <span className="job">House Cleaner</span>
              <section className="responsibilites">
                <h4>Responsibilites:</h4>
                <ul className="responsibilities-list">
                  <li>Dishes</li>
                  <li>Vacuuming</li>
                  <li>General cleaning</li>
                </ul>
              </section>
              <span className="time-range">December 2019 - August 2021</span>
              <span className="location">Location: Champaign, IL</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
