// import { NavLink } from "react-router-dom";
import "./index.css";

export default function NavBar(props) {
  return (
    <div id="nav-bar">
      {/* <NavLink to="/contact"> */}
      <button type="button" id="btn-contact">
        Contact Me
      </button>
      {/* </NavLink> */}

      <a
        download
        href="./images/Griggs,Antwoine_Software-Engineer-Resume.pdf"
        id="resume-link"
        target="_blank"
      >
        Resume
      </a>
    </div>
  );
}
