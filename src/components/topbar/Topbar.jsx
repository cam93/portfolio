import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"
import DownloadIcon from '@mui/icons-material/Download';
import CV from "../../assets/MARTINDALE_Resume.pdf"

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">C.M.</a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span>347-545-0703</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>Martindale93@outlook.com</span>
          </div>
          <div className="downloadIcon">
            <DownloadIcon className="icon"/>
          </div>
          <div className="downloadButton">
            <a href={CV} className="download" download>Download CV</a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
