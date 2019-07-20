import React from "react";
import charts from "./charts";
import cards from "./cards";
import blueCard from "./blueCard";

class layout extends React.Component {
  render() {
    return (
      <main className="mdl-layout__content mdl-color--grey-100">
        <div className="mdl-grid demo-content">
          <charts></charts>
          <cards></cards>
          <div className="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
            <div className="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
              <blueCard></blueCard>
            </div>
          </div>
          <div className="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
            <div className="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
              <div className="mdl-card__title mdl-card--expand mdl-color--amber-300">
                <h2 className="mdl-card__title-text ">Stocks</h2>
              </div>
            </div>
          </div>
          <div className="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
            <div className="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
              <div className="mdl-card__title mdl-card--expand mdl-color--blue-grey-800">
                <h2 className="mdl-card__title-text " id="blueCard">
                  News
                </h2>
              </div>
            </div>
          </div>
          <div className="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
            <div className="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
              <div className="mdl-card__title mdl-card--expand mdl-color--amber-300">
                <h2 className="mdl-card__title-text " color>
                  News
                </h2>
              </div>
            </div>
          </div>
          <div className="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
            <div className="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
              <div className="mdl-card__title mdl-card--expand mdl-color--blue-grey-800">
                <h2 className="mdl-card__title-text " id="blueCard">
                  News
                </h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default layout;
