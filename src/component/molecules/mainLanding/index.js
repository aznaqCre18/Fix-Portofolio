import React from "react";

import ImageProfile from "./../../../assets/image/self/profile.svg";

export default function index() {
  return (
    <div className="main-profile">
      <div className="intro">
        <div className="intro-title">
          I’m an junior <i>Fullstack</i> developer programmer, but i'am more
          focused on <i>Frontend</i> developer
        </div>
        <div className="intro-subtitle">
          My name is Aziz Nur Abdul Qodir, I am a person who likes new things, I
          like something beautiful, and I am very ambitious to become an expert
          frontend developer who can share useful knowledge for everyone
        </div>
      </div>

      <div className="image-profile">
        <div className="inner">
          <img src={ImageProfile} alt="Profile" />
        </div>
        <div className="bg-image"></div>
      </div>
    </div>
  );
}
