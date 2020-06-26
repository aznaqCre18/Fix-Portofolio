import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import CardImage from "./../../atoms/portofolioCard";

const CardComp = ({ link, aos, img, title, type, stack }) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <a href={link}>
      <div
        className="container-full-card"
        data-aos={aos}
        // onClick={() => goingTo(link)}
      >
        <CardImage img={img} alt={title} />
        <div className="content">
          <h1>{title}</h1>
          <p>{type}</p>
          <p>{stack}</p>
        </div>
      </div>
    </a>
  );
};

export default CardComp;
