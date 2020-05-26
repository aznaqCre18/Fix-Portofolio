import React from "react";

import "./style.scss";

const ImageCard = (props) => {
  return (
    <div className="portofolio-container" data-aos="fade-right">
      <img src={props.img} alt={props.alt} />
    </div>
  );
};

export default ImageCard;
