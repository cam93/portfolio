import "./intro.scss";
import {KeyboardArrowDown} from "@material-ui/icons";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {

  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, {
      showCursor: true,
      backDelay: 1200,
      backSpeed: 60,
      strings: ["Software Engineer", "Web Developer"],
    });
  },[])

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
            I'm A <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDown className="icon"/>
        </a>
      </div>
    </div>
  )
}
