import React from "react";

import "./../../style/DescribeSelf/style.scss";
import Header from "./../../component/molecules/Navbar";
import MainLanding from "./../../component/molecules/mainLanding";
// import NavMenu from "../../component/molecules/navbarMenu";

const DescribeSelf = () => {
  return (
    <>
      <div id="main-container">
        {/* <NavMenu /> */}
        <Header />
        <MainLanding />
      </div>
    </>
  );
};

export default DescribeSelf;
