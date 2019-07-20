import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

class demo extends React.Component {
  render() {
    return (
      <div className="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
        <header className="demo-drawer-header">
          <img
            src="https://images.pexels.com/photos/36715/pigeon-flight-twig.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="Logo"
          />
          <Logo></Logo>
        </header>
        <Nav></Nav>
      </div>
    );
  }
}

export default demo;
