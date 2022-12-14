import pageArray from "../data/page-list";
import { HomeItem } from "./home-item";
import "../styles/home.css";

export function Home() {
  return (
    <div id="home-page">
      <h1 id="home-title">Alex Fallaw Portfolio</h1>
      <div id="page-holder">
        {pageArray.map((page, i) => (
          <HomeItem page={page} key={i} />
        ))}
      </div>
    </div>
  );
}
