import React from "react";

function Header(props) {
  const { name, description, pic } = props;

  return (
    <header>
      <div className="container-content">
        <img
          className="logo"
          src="https://consumer-component-library.roocdn.com/11.3.1/static/images/logo-teal.64a39561252047a022e5ce0929c75374.svg"
          alt="Deliveroo logo"
        />
      </div>
    </header>
  );
}

export default Header;
