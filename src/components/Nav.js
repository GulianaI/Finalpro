import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <nav className="demo-navigation mdl-navigation mdl-color--blue-grey-800">
          <a className="mdl-navigation__link" href>
            <i
              className="mdl-color-text--amber-400 material-icons"
              role="presentation"
            >
              home
            </i>
            Home
          </a>
          <a className="mdl-navigation__link" href>
            <i
              className="mdl-color-text--amber-400 material-icons"
              role="presentation"
            >
              person
            </i>
            Your Stocks
          </a>
          <a className="mdl-navigation__link" href>
            <i
              className="mdl-color-text--amber-400 material-icons"
              role="presentation"
            >
              trending_up
            </i>
            Stock Market
          </a>
          <a className="mdl-navigation__link" href>
            <i
              className="mdl-color-text--amber-400 material-icons"
              role="presentation"
            >
              verified_user
            </i>
            Log in / Log out
          </a>
          <div className="mdl-layout-spacer" />
        </nav>
      </div>
    );
  }
}

export default Nav;
