import React, { useEffect } from "react";
import { Link } from "react-scroll";
import "./Navigation.css";

export default function(){
  let aboutMeDiv;
  let portfolioDiv;
  let skillsDiv;
  let contactMeDiv;

  useEffect(() => {
    aboutMeDiv = document.getElementById("about-me");
    portfolioDiv = document.getElementById("portfolio");
    skillsDiv = document.getElementById("skills");
    contactMeDiv = document.getElementById("contact-me");
  }, []);

  return (
    <nav>
      <div className="profile-img">
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEk88M-Ip-Wrg/profile-displayphoto-shrink_100_100/0/1638471611825?e=1643846400&v=beta&t=XZed_GmvLCtbG0Vch5e8ksyTD0JzuHoXkQYnSn7gcAk" />
      </div>
      <div onClick={() => aboutMeDiv.scrollIntoView()}>
        <Link to="about-me">About Me</Link>
      </div>
      <div onClick={() => portfolioDiv.scrollIntoView()}>
        <Link to="portfolio">Portfolio</Link>
      </div>
      <div onClick={() => skillsDiv.scrollIntoView()}>
        <Link to="skills">Skills</Link>
      </div>
      <div onClick={() => contactMeDiv.scrollIntoView()}>
        <Link to="contact-me">Contact</Link>
      </div>
    </nav>
  );
};

// export default Navigation;
