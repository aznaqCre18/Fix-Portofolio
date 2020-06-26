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

const ListProject = () => {
  return (
    <article id="project-container">
      <section className="left-side">
        <header className="title">
          <h3>Selected Project</h3>
          <h1>Get a Taste of</h1>
          <h1>What I Do Best</h1>
        </header>

        <FullCard
          img={Donation}
          title="Donation"
          type="Web App"
          stack="React.js, Apollo GraphQL, SASS"
          aos="fade-right"
          link="https://github.com/aznaqCre18/mejik-foundation"
        />

        <FullCard
          img={Chiketto}
          title="Chiketto"
          type="Web App"
          stack="React.js, Bootstrap, Node.js, Sequelize, MySQL"
          aos="fade-right"
          link="https://github.com/aznaqCre18/chiketto"
        />

        <FullCard
          img={Academy}
          title="Mejik Academy"
          type="Web App"
          stack="React.js, Bootstrap, AntDesign, Apollo GraphQL"
          aos="fade-right"
          link="https://github.com/aznaqCre18/mejik-test"
        />
      </section>
      <section className="right-side">
        <FullCard
          img={SayurBox}
          title="Sayur Box"
          type="Android App"
          stack="React Native, Native Base"
          aos="fade-up-left"
          link="https://github.com/DaffaAM/CloneSayurNew/tree/aziz"
        />

        <FullCard
          img={Pokemon}
          title="Pokemon Pokedex"
          type="Web App"
          stack="React.js, AntDesign, PokeAPI"
          aos="fade-up-left"
          link="https://github.com/aznaqCre18/Pokemon-Info"
        />

        <FullCard
          img={Breednder}
          title="Breednder"
          type="Web App"
          stack="React.js, Bootstrap, Node.js, Sequelize, MySQL"
          aos="fade-up-left"
          link="https://github.com/aznaqCre18/Breednder-Clone-Tinder"
        />

        <div className="more-project" data-aos="fade-left">
          <a href="https://github.com/aznaqCre18">
            <div className="inner-more" style={{ color: "black" }}>
              <div>See Detail Project on Github</div>
              <img src={RightArrow} alt="going to github" />
            </div>
          </a>
        </div>
      </section>
    </article>
  );
};

export default ListProject;
