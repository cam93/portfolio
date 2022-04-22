import "./intro.scss";
import {KeyboardArrowDown} from "@material-ui/icons";

export default function Intro() {

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          {/*<img src="assets/" alt="Head shot photo" />*/}
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi 👋🏽, My Name Is</h2>
          <h1>Cameron Martindale</h1>
          <h3>
            I'm A <span>Software Engineer</span>
          </h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDown className="icon"/>
        </a>
      </div>
    </div>
  )
}
