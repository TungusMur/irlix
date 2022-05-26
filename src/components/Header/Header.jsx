import React from "react";
import Logo from "../../assets/img/Logo-min.svg";

const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <img src={Logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
