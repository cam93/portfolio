import { useState } from "react";
import "./projects.scss";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data =[
    {
      id: "1",
      icon: "./assets/globe.png",
      title: "Web Design",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
    },
    {
      id: "2",
      icon: "./assets/mobile.png",
      title: "Mobile Application",
      desc: 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
      img:
        {/*Add an image here */}
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc: 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
      img:
        {/*Add an image here */}
    }
  ];

  const handleClick = (way) => {
    way === "left"
    ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
    : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="projects" id="projects">
      <div className="slider"
      style={{ transform:  `translateX(-${currentSlide * 100}vw)` }}>

        {data.map((d) =>(
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>  
                  <h2>{d.title}</h2>
                  <p>
                    {d.desc}
                  </p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="left slider arrow" onClick={()=>handleClick("left")} />
      <img src="assets/arrow.png" className="arrow right" alt="right slider arrow" onClick={()=>handleClick()} />
    </div>
  );
}
