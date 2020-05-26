import React from "react";

import "./../../style/ListProject/style.scss";
import FullCard from "./../../component/molecules/FullCardPortofolio";
import RightArrow from "./../../assets/icon/depedencies/right-arrow.svg";
import {
  Donation,
  SayurBox,
  Chiketto,
  Pokemon,
  Academy,
  Breednder,
} from "./../../assets/image/Project";

export default function index() {
  return (
    <div id="project-container">
      <div className="left-side">
        <div className="title">
          <h3>Selected Project</h3>
          <h1>Get a Taste of</h1>
          <h1>What I Do Best</h1>
        </div>

        <FullCard
          img={Donation}
          title="Donation"
          type="Web App"
          stack="React.js, Apollo GraphQL, SASS"
        />

        <FullCard
          img={Chiketto}
          title="Chiketto"
          type="Web App"
          stack="React.js, Bootstrap, Node.js, Sequelize, MySQL"
        />

        <FullCard
          img={Academy}
          title="Mejik Academy"
          type="Web App"
          stack="React.js, Bootstrap, AntDesign, Apollo GraphQL"
        />
      </div>
      <div className="right-side">
        <FullCard
          img={SayurBox}
          title="Sayur Box"
          type="Android App"
          stack="React Native, Native Base"
        />

        <FullCard
          img={Pokemon}
          title="Pokemon Pokedex"
          type="Web App"
          stack="React.js, AntDesign, PokeAPI"
        />

        <FullCard
          img={Breednder}
          title="Breednder"
          type="Web App"
          stack="React.js, Bootstrap, Node.js, Sequelize, MySQL"
        />

        <div className="more-project">
          <div className="inner-more">
            <div>See Detail Project on Github</div>
            <img src={RightArrow} alt="going to github" />
          </div>
        </div>
      </div>
    </div>
  );
}
