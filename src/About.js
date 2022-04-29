import React, { useState } from "react";
import "./assets/css/navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import DownloadIcon from "@mui/icons-material/Download";
import LinkIcon from "@mui/icons-material/Link";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";

const About = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <nav className="navigation">
        <div className="brand-name">
          <img
            className="mx-ato"
            src={require("./assets/images/route.png")}
            width
            style={{ height: "40px" }}
          />
          <span style={{ left: -"-8px", position: "relative" }}>eyur</span>
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
            />
          </a>
        </div>
        <a
          download="your_cv.pdf"
          //put the path of your pdf file
          href={require("./assets/pdf/resume.pdf")}
          style={{
            border: "1px solid white",
            borderRadius: 15,
            display: "flex",
            flexDirection: "row",
            color: "white",
            padding: "5px",
            paddingRight: "10px",
            paddingLeft: "10px",
            marginTop: "5px",
            textDecoration: "none",
          }}
        >
          <DownloadIcon style={{ marginRight: "5px" }} />
          Resume
        </a>
      </div>
      <div id="technology" style={{ paddingLeft: "5vw", paddingRight: "5vw" }}>
        <div
          style={{
            textAlign: "center",
            fontSize: 35,
            color: "white",
            fontWeight: "bold",
          }}
        >
          Technology
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <div className="col-sm-12 col-md-6 col-lg-3 p-2">
            <div
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                padding: "5px",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <span style={{ fontSize: 28, fontWeight: "bold" }}>
                Languages
              </span>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img
                    className="mx-ato"
                    src={require("./assets/images/c.png")}
                    style={{ height: "70px", width: "70px", margin: 10 }}
                  />
                  <img
                    className="mx-ato"
                    src={require("./assets/images/java.png")}
                    style={{ height: "70px", width: "70px", margin: 10 }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img
                    className="mx-ato"
                    src={require("./assets/images/c++.png")}
                    style={{ height: "70px", width: "70px", margin: 10 }}
                  />
                  <img
                    className="mx-ato"
                    src={require("./assets/images/python.png")}
                    style={{ height: "70px", width: "70px", margin: 10 }}
                  />
                </div>
              </div>
              <span style={{ textAlign: "center" }}>
                My favorite languages for systems programming, software
                engineering, and data analysis.
              </span>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 p-2">
            <div
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                padding: "5px",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <span style={{ fontSize: 28, fontWeight: "bold" }}>
                Front-End
              </span>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img
                    className="mx-ato"
                    src={require("./assets/images/html.png")}
                    style={{ height: "70px", width: "70px", margin: 10 }}
                  />
                  <img
                    className="mx-ato"
                    src={require("./assets/images/css.png")}
                    style={{ height: "70px", width: "70px", margin: 10 }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img
                    className="mx-ato"
                    src={require("./assets/images/bootstrap.png")}
                    style={{ height: "70px", width: "70px", margin: 10 }}
                  />
                  <img
                    className="mx-ato"
                    src={require("./assets/images/react.png")}
                    style={{ height: "70px", width: "70px", margin: 10 }}
                  />
                </div>
              </div>
              <span style={{ textAlign: "center" }}>
                My preferred technologies for front-end web development and
                component design.
              </span>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 p-2">
            <div
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                padding: "5px",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <span style={{ fontSize: 28, fontWeight: "bold" }}>Back-End</span>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img
                    className="mx-ato"
                    src={require("./assets/images/mongodb.webp")}
                    style={{ height: "70px", width: "70px", margin: 10 }}
                  />
                  <img
                    className="mx-ato"
                    src={require("./assets/images/firebase.png")}
                    style={{ height: "70px", width: "70px", margin: 10 }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img
                    className="mx-ato"
                    src={require("./assets/images/node.webp")}
                    style={{ height: "70px", width: "70px", margin: 10 }}
                  />
                  <img
                    className="mx-ato"
                    src={require("./assets/images/python.png")}
                    style={{ height: "70px", width: "70px", margin: 10 }}
                  />
                </div>
              </div>
              <span style={{ textAlign: "center" }}>
                My preferred technologies for back-end web programming and
                database architecture.
              </span>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 p-2">
            <div
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                padding: "5px",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <span style={{ fontSize: 28, fontWeight: "bold" }}>Tools</span>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img
                    className="mx-ato"
                    src={require("./assets/images/git.png")}
                    style={{ height: "70px", width: "70px", margin: 10 }}
                  />
                  <img
                    className="mx-ato"
                    src={require("./assets/images/github.png")}
                    style={{ height: "70px", width: "70px", margin: 10 }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img
                    className="mx-ato"
                    src={require("./assets/images/vscode.png")}
                    style={{ height: "70px", width: "70px", margin: 10 }}
                  />
                  <img
                    className="mx-ato"
                    src={require("./assets/images/androidstudio.png")}
                    style={{ height: "70px", width: "70px", margin: 10 }}
                  />
                </div>
              </div>
              <span style={{ textAlign: "center" }}>
                My favorite tools for version control, code editing, and
                container orchestration.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        id="projects"
        style={{
          paddingLeft: "5vw",
          paddingRight: "5vw",
          display: "flex",
          flexDirection: "column",
          marginTop: "5vh",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: 35,
            color: "white",
            fontWeight: "bold",
          }}
        >
          Featured Projects
        </div>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            display: "flex",
            padding: "5px",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginBottom: "15px",
            marginTop: "15px",
          }}
        >
          <span style={{ fontSize: 30, fontWeight: "bold" }}>BillShare</span>
          <div
            style={{
              display: "flex",
              padding: "5px",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              className="col-sm-12 col-md-4 col-lg-3 p-2"
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <img
                className="mx-ato"
                src={require("./assets/images/billshare.png")}
                style={{
                  height: "200px",
                  width: "200px",
                  borderRadius: 15,
                  padding: 5,
                }}
              />
            </div>

            <div
              className="col-sm-12 col-md-8 col-lg-9 p-2"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div
                style={{
                  textAlign: "left",
                  fontSize: 18,
                  flexDirection: "row",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Technologies :</span>
                <img
                  className="mx-ato"
                  src={require("./assets/images/react.png")}
                  style={{ height: "40px", width: "40px", margin: 10 }}
                />
                <img
                  className="mx-ato"
                  src={require("./assets/images/firebase.png")}
                  style={{ height: "40px", width: "40px", margin: 10 }}
                />
              </div>
              <span style={{ textAlign: "left", fontSize: 18 }}>
                BookMyBook is application for collage engineering students who
                can buy or sell engineering books at law price from their senior
                or junior.
              </span>
              <div>
                <a
                  style={{ textDecoration: "none", fontSize: 20 }}
                  href="https://play.google.com/store/apps/details?id=com.billshare"
                >
                  <LinkIcon />
                  Download Application
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            display: "flex",
            padding: "5px",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginBottom: "15px",
            marginTop: "15px",
          }}
        >
          <span style={{ fontSize: 30, fontWeight: "bold" }}>BookMyBook</span>
          <div
            style={{
              display: "flex",
              padding: "5px",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              className="col-sm-12 col-md-4 col-lg-3 p-2"
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <img
                className="mx-ato"
                src={require("./assets/images/bookmybook.png")}
                style={{
                  height: "200px",
                  width: "200px",
                  borderRadius: 15,
                  padding: 5,
                }}
              />
            </div>

            <div
              className="col-sm-12 col-md-8 col-lg-9 p-2"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div
                style={{
                  textAlign: "left",
                  fontSize: 18,
                  flexDirection: "row",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Technologies :</span>
                <img
                  className="mx-ato"
                  src={require("./assets/images/react.png")}
                  style={{ height: "40px", width: "40px", margin: 10 }}
                />
                <img
                  className="mx-ato"
                  src={require("./assets/images/firebase.png")}
                  style={{ height: "40px", width: "40px", margin: 10 }}
                />
              </div>
              <span style={{ textAlign: "left", fontSize: 18 }}>
                BookMyBook is application for collage engineering students who
                can buy or sell engineering books at law price from their senior
                or junior.
              </span>
              <div>
                <a
                  style={{ textDecoration: "none", fontSize: 20 }}
                  href="https://play.google.com/store/apps/details?id=com.bookmybook"
                >
                  <LinkIcon />
                  Download Application
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <div className="col-sm-12 col-md-6 col-lg-6 p-2">
            <div
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                padding: "10px",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <span style={{ fontSize: 28, fontWeight: "bold" }}>
                Updates2k21
              </span>
              <div
                style={{
                  textAlign: "left",
                  fontSize: 18,
                  flexDirection: "row",
                }}
              >
                <img
                  className="mx-ato"
                  src={require("./assets/images/react.png")}
                  style={{ height: "40px", width: "40px", margin: 10 }}
                />
                <img
                  className="mx-ato"
                  src={require("./assets/images/mongodb.webp")}
                  style={{ height: "40px", width: "40px", margin: 10 }}
                />
                <img
                  className="mx-ato"
                  src={require("./assets/images/html.png")}
                  style={{ height: "40px", width: "40px", margin: 10 }}
                />
                <img
                  className="mx-ato"
                  src={require("./assets/images/css.png")}
                  style={{ height: "40px", width: "40px", margin: 10 }}
                />
                <img
                  className="mx-ato"
                  src={require("./assets/images/bootstrap.png")}
                  style={{ height: "40px", width: "40px", margin: 10 }}
                />
              </div>
              <div>
                <span
                  style={{
                    alignItems: "flex-start",
                    fontWeight: "bold",
                    display: "flex",
                    fontSize: 20,
                  }}
                >
                  Description :
                </span>
                <span style={{ textAlign: "center", fontSize: 18 }}>
                  Event Registration website for collage techfest
                </span>
                <span
                  style={{
                    alignItems: "flex-start",
                    fontWeight: "bold",
                    display: "flex",
                    fontSize: 20,
                  }}
                >
                  Link :
                </span>
                <a
                  href="https://updates2k21.co.in/"
                  target="_blank"
                  style={{ textAlign: "center", fontSize: 18 }}
                >
                  https://updates2k21.co.in/
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6 p-2">
            <div
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                padding: "10px",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <span style={{ fontSize: 28, fontWeight: "bold" }}>
                Exuberence2k21
              </span>
              <div
                style={{
                  textAlign: "left",
                  fontSize: 18,
                  flexDirection: "row",
                }}
              >
                <img
                  className="mx-ato"
                  src={require("./assets/images/html.png")}
                  style={{ height: "40px", width: "40px", margin: 10 }}
                />
                <img
                  className="mx-ato"
                  src={require("./assets/images/css.png")}
                  style={{ height: "40px", width: "40px", margin: 10 }}
                />
                <img
                  className="mx-ato"
                  src={require("./assets/images/bootstrap.png")}
                  style={{ height: "40px", width: "40px", margin: 10 }}
                />
                <img
                  className="mx-ato"
                  src={require("./assets/images/js.png")}
                  style={{ height: "40px", width: "60px", margin: 10 }}
                />
              </div>
              <div>
                <span
                  style={{
                    alignItems: "flex-start",
                    fontWeight: "bold",
                    display: "flex",
                    fontSize: 20,
                  }}
                >
                  Description :
                </span>
                <span style={{ textAlign: "center", fontSize: 18 }}>
                  Techfest website for event's Information and Registration
                </span>
                <span
                  style={{
                    alignItems: "flex-start",
                    fontWeight: "bold",
                    display: "flex",
                    fontSize: 20,
                  }}
                >
                  Link :
                </span>
                <a
                  href="https://exuberance2k21.github.io/site/"
                  target="_blank"
                  style={{ textAlign: "center", fontSize: 18 }}
                >
                  https://exuberance2k21.github.io/site/
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            fontSize: 35,
            color: "white",
            fontWeight: "bold",
          }}
        >
          Contact Information
        </div>

        <div
          id="contact"
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            display: "flex",
            padding: "10px",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
            marginBottom: "15px",
            marginTop: "15px",
          }}
        >
          <a href="tel:8238020140" style={{color:"black",textDecoration:"none"}} >
            <CallIcon style={{marginRight:"5px"}}/>
            (+91) 82380 20140
          </a>
          <a href="mailto:kakadiyakeyur53@gmail.com" style={{color:"black",textDecoration:"none"}} >            <MailIcon style={{marginRight:"5px"}}/>
            kakadiyakeyur53@gmail.com
          </a>
          <a>
            <LocationOnIcon style={{marginRight:"5px"}}/>
            Surat,Gujarat,India
          </a>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: "5px",
          paddingBottom: "5px",
          backgroundColor: "white",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div style={{ fontSize: 20 }}>
          &#169; Keyur Kakadiya , {new Date().getFullYear()}
        </div>
      </div>
    </>
  );
};

export default About;
