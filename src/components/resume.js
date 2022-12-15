import "../styles/resume.css";
import "../styles/common.css";

export function Resume() {
  return (
    <div className="bod web-bg">
      <div id="resume-viewer" className="inner-bod">
        <embed src="images/alexfallawresume.pdf" id="pdf-view" />
      </div>
    </div>
  );
}
