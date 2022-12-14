import pageArray from "../data/page-list";
import { HomeItem } from "./home-item";
import "../styles/home.css";
import "../styles/common.css";

export function Home() {
  return (
    <div className="bod">
      <div id="home-page" className="inner-bod">
        <div id="home-title-holder">
          <h1 id="home-title">Alex Fallaw Portfolio</h1>
        </div>
        <div id="page-holder">
          {pageArray.map((page, i) => (
            <HomeItem page={page} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
