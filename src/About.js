import React, { useState } from "react";
import "./assets/css/navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import DownloadIcon from "@mui/icons-material/Download";
import InstagramIcon from "@mui/icons-material/Instagram";

const About = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const TechnologyCard = ()=>{
    return(<div className="col-sm-12 col-md-6 col-lg-3 p-2" >
    <div style={{backgroundColor:"white",borderRadius:10,padding:"5px",alignItems:"center",display:"flex",justifyContent:"center",flexDirection:"column"}}>
    <img
      className="mx-ato"
      src={require("./assets/images/back.jpg")}
      style={{ height: "40vh",width:"100%",borderRadius:15 }}
    />
    <span>BillShare</span>
    <div>
      languages
    </div>
    <span style={{textAlign:"center"}}>Generate Invoice (pdf format) and share it via whatsapp,gmail other sharable media</span>
    </div>
  </div>);
  }

  return (
    <>
      <nav className="navigation">
        <div className="brand-name">
          <img
            className="mx-ato"
            src={require("./assets/images/route.png")}
            width
            style={{ height: "40px" }}
          /><span style={{left:-"-8px",position:"relative"}}>eyur</span>
        </div>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <MenuIcon />
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <a
                href="#technology"
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                Technology
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div
        id="about"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          id="img-profile"
          className="mx-ato"
          src={require("./assets/images/keyur.jpg")}
          style={{
            height: "30vh",
            width: "30vh",
            backgroundColor: "white",
            borderRadius: "50%",
          }}
        />
        <span id="name">Keyur Kantibhai Kakadiya</span>
        <span id="role">
          Software Engineer, Full-Stack Developer, College Student
        </span>
        <div className="profiles">
          <a
            href="https://github.com/kakadiyakeyur53"
            target={"_blank"}
            style={{ color: "white" }}
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/keyur-kakadiya"
            target={"_blank"}
            style={{ color: "white" }}
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://twitter.com/kakadiyakeyur53"
            target={"_blank"}
            style={{ color: "white" }}
          >
            <TwitterIcon />
          </a>

          <a
            href="https://www.npmjs.com/~keyurkakadiya53"
            target={"_blank"}
            style={{ color: "white" }}
          >
            <img
              className="mx-ato"
              src={require("./assets/images/npm.png")}
              style={{ height: "20px", width: "35px" }}
            />{" "}
          </a>
        </div>
        <a
          download={require("./assets/images/back.jpg")}
          style={{
            border: "1px solid white",
            borderRadius: 15,
            display: "flex",
            flexDirection: "row",
            color: "white",
            padding: "5px",
            paddingRight: "10px",
            paddingLeft: "10px",
            marginTop:"5px"
          }}
        >
          <DownloadIcon style={{ marginRight: "5px" }} />
          Resume
        </a>
      </div>
      <div id="technology" style={{}} >
        <div style={{textAlign:"center",fontSize:30,color:"white"}}>Technology</div>
        <div style={{ display:"flex",flexDirection:"row",flexWrap:"wrap" }}>
        <TechnologyCard/>
        <TechnologyCard/>
        <TechnologyCard/>
        <TechnologyCard/>
        </div>

      </div>
      <div id="projects" style={{ height: "100vh" }}>
        <div className="col-sm-12 col-md-6 col-lg-3 my-2" style={{backgroundColor:"white"}}>
          keyur
        </div>
      </div>
    </>
  );
};

export default About;
