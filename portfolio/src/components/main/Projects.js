import React from "react";
import "./index.css";
import { projectImages } from "./images/index.js";

export default function Projects() {
  return (
    <div id="project-section">
      <h2 id="project-title">Projects</h2>
      <div id="project-container">
        {/* Trivia-Game */}
        <div id="project-wrapper">
          <div id="text-container">
            <p id="text">
              Languages
              <br /> HTML, CSS, JavaScript, API <br />
              <br />
              Description: <br />
              Built a trivia game using API
              <a
                href="https://github.com/antwoinegriggs/Trivia-Game"
                rel="noreferrer"
                target={"_blank"}
              >
                <button id="btn-projects">View Code</button>
              </a>
            </p>
          </div>
          <img id="trivia-game" src={projectImages.triviaImage} alt="" />
          <h2 id="trivia-title">Trivia Game</h2>
        </div>
        {/* Heroes Catalog */}
        <div id="project-wrapper">
          <div id="text-container">
            <p id="text">
              Languages
              <br /> HTML, CSS, JavaScript, API <br />
              <br />
              Description:
              <br /> Utilized Marvel API to design a catalog for Marvel
              Characters
              <a
                href="https://github.com/antwoinegriggs/marvel-character-catalog"
                rel="noreferrer"
                target={"_blank"}
              >
                <button id="btn-projects">View Code</button>
              </a>
            </p>
          </div>

          <img id="heroes-catalog" src={projectImages.heroImage} alt="" />
          <h2 id="heroes-title">Marvel Character Catalog</h2>
        </div>
        {/* Dice Game */}
        <div id="project-wrapper">
          <div id="text-container">
            <p id="text">
              Languages
              <br /> HTML, CSS, JavaScript, React.js
              <br />
              <br />
              Description
              <br /> Random dice roll that generator and render dice images
              <br />
              <a
                href="https://github.com/antwoinegriggs/React-Dice-Roller"
                rel="noreferrer"
                target={"_blank"}
              >
                <button id="btn-projects">View Code</button>
              </a>
            </p>
          </div>

          <img id="dice-game" src={projectImages.diceImage} alt="" />
          <h2 id="dice-title">Dice Roller w/React</h2>
        </div>
      </div>
      <a
        href="https://github.com/antwoinegriggs"
        rel="noreferrer"
        target={"_blank"}
      >
        <button id="btn-github">GitHub</button>
      </a>
    </div>
  );
}
