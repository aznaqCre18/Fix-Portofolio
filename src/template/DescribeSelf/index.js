import React from "react";

import "./../../style/DescribeSelf/style.scss";
import Header from "./../../component/molecules/Navbar";
import MainLanding from "./../../component/molecules/mainLanding";

const DescribeSelf = () => {
  return (
    <>
      <section id="main-container">
        <Header />
        <MainLanding />
      </section>
    </>
  );
};

export default DescribeSelf;
