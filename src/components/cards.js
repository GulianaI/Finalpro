import React from "react";
import yellowCard from "./yellowCard";

class cards extends React.Component {
  render() {
    return (
      <div className="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
        <div className="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
          <yellowCard></yellowCard>
        </div>
      </div>
    );
  }
}

export default cards;
