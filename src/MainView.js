import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Header = () => {
  return (
    <div css={css``}>
      <h1>Well the Main View is running!</h1>
    </div>
  );
};

const LoadingThing = () => {
  return (
    <div css={css``}>
      <span
        css={css`
          font-size: 2em;
        `}
      >
        Loading...... ... ...
      </span>
    </div>
  );
};

class MainView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }

  render() {
    return <div>{this.state.loading ? <LoadingThing /> : <Header />}</div>;
  }
}

export default MainView;
