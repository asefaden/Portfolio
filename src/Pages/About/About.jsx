import React from "react";
import "./About.css";
import assets from "../../assets/profile.jpg";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <img src={assets} alt="logo" className="about-logo" />
        <p>
          Assefa Demeke <br></br>
          <span>
            Full-Stack Developer <bold>|</bold> Web Developer | Mobile Developer
          </span>
        </p>
        <p></p>
      </div>
      <div className="about">
        <h1>About Me</h1>
        <p>
          Hey! I'm a full-stack developer who loves building things that
          actually make a difference. I work on both web and mobile stuff, and I
          enjoy jumping between frontend and backend—whether it's making a slick
          UI or setting up a solid backend system. Lately, I've been diving into
          everything from DevOps to AI agents. I'm always experimenting with new
          tools, building projects, and sharing what I learn along the way.
          Basically, if there's an idea worth building, I'm all in.
        </p>
      </div>
      <div className="about-contact">
        <a
          href="https://github.com/asefaden"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
          Github
        </a>

        <a
          href="https://www.linkedin.com/in/assefa-demeke/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
          LinkedIn
        </a>

        <a
          href="https://mailto:assede1122@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" />
          Gmail
        </a>

        <a
          href="https://x.com/AssefaDe1122"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" />
          Twitter
        </a>
      </div>
    </div>
  );
};

export default About;
