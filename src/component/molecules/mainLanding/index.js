import React, { useEffect } from "react";
import { gsap, Power3 } from "gsap";

import ImageProfile from "./../../../assets/image/self/profile.svg";

const DescribeSelf = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".inner",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.5,
        ease: Power3.easeOut,
      },
      0.5
    ).fromTo(
      ".bg-image",
      {
        x: "100%",
      },
      {
        x: 0,
        ease: Power3.easeOut,
        zIndex: -3,
      },
      0.5
    );

    tl.fromTo(
      ".anim-typo",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.4,
        ease: Power3.easeOut,
      },
      "-=0.1"
    );
  }, []);

  return (
    <article className="main-profile">
      <section className="intro">
        <header className="intro-title anim-typo">
          I’m an junior <i>Fullstack</i> developer programmer, but i'am more
          focused on <i>Frontend</i> developer
        </header>
        <main className="intro-subtitle anim-typo">
          My name is Aziz Nur Abdul Qodir, I am a person who likes new things, I
          like something beautiful, and I am very ambitious to become an expert
          frontend developer who can share useful knowledge for everyone
        </main>
      </section>

      <figure className="image-profile">
        <div className="inner">
          <img src={ImageProfile} alt="Profile" />
        </div>
        <div className="bg-image"></div>
      </figure>
    </article>
  );
};

export default DescribeSelf;
