import React from "react";

import "./../../style/DescribeSelf/style.scss";
import Header from "./../../component/molecules/Navbar";
import MainLanding from "./../../component/molecules/mainLanding";

const DescribeSelf = () => {
  return (
    <>
      <div id="main-container">
        <Header />
        <MainLanding />
      </div>
    </>
  );
};

export default DescribeSelf;
