import React from "react";
import NavButt from "./NavButt";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  buildButts = fires => {
    let butts = [];
    for (let y = 1992; y <= 2015; y++) {
      let dataReady = Object.prototype.hasOwnProperty.call(fires, y.toString());
      if (fires && dataReady) {
        butts.push({ year: y.toString(), data: fires[y.toString()] });
      } else {
        butts.push({ year: y.toString(), data: null });
      }
    }
    return butts;
  };

  container = props => {
    return (
      <div
        css={css`
          background: maroon;
        `}
      >
        {props.children}
      </div>
    );
  };

  render() {
    let fires = this.buildButts(this.props.fires);
    console.log("Butts are: ");
    console.log(fires);
    return (
      <this.container>
        {fires.map(fire => {
          <NavButt year={fire.year} data={fire.data} selected={false} />;
        })}
      </this.container>
    );
  }
}

export default NavBar;
