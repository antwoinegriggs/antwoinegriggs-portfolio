import "./index.css";
import { techImages } from "./images/index.js";

export default function Technology(props) {
  return (
    <div id="technology">
      <h2 id="tech-title">Technologies </h2>
      <div id="tech-images-container">
        <div id="tech-img">
          <img src={techImages.javaScriptImage} alt="javaScript" />
        </div>
        <div id="tech-img">
          <img src={techImages.reactImage} alt="react" />
        </div>
        <div id="tech-img">
          <img src={techImages.htmlImage} alt="html 5" />
        </div>
        <div id="tech-img">
          <img src={techImages.cssImage} alt="css 3" />
        </div>
      </div>
    </div>
  );
}
