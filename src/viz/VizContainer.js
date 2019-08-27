import React from "react";
import Error from "./Error";
import Header from "./Header";
import NavBar from "./NavBar";
import LoadingThing from "./LoadingThing";
// import { dateTools } from "../utils";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { fireService } from "../fire-service";
import { sizes } from "../styles";

class VizContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      ready: false,
      error: null,
      fires: {},
      year: null, // demo default
      date: new Date("1999/08/15"), // demo default
      state: null, // demo default
      urlBase: null
    };
  }

  handleError = (msg, o) => {
    let error = { message: msg, otherCrap: o };
    this.setState({ error, loading: false });
  };

  updateFires = async (year, res) => {
    let data = await res.json();
    // console.log("Data is: ");
    // console.log(data);
    this.setState(state => {
      state.fires[year.toString()] = data;
      state.loading = false;
      state.ready = true;
    });
  };

  getFires = () => {
    for (let y = 1992; y <= 2015; y++) {
      let successCB = (y, res) => this.updateFires(y, res);
      let errorCB = (y, err) => this.handleError("Couldn't get year " + y, err);
      fireService.getYear(y, successCB, errorCB);
    }
  };

  componentDidMount() {
    this.getFires();
  }

  container = props => {
    return (
      <div
        css={css`
          margin: 1em 0 1em 0;
          text-align: center;
        `}
      >
        <div
          css={css`
            display: inline-block;
            width: 90%;
            max-width: 50em;
            min-width: 20em;
            padding: 1em;
            border: thin solid #bbbbbb;
            border-radius: ${sizes.borderRadius};
          `}
        >
          {props.children}
        </div>
      </div>
    );
  };

  render() {
    const { error, loading, ready, fires } = this.state;
    return (
      <this.container>
        {ready ? (
          <div>
            <Header />
            <NavBar fires={fires} />
          </div>
        ) : null}

        {error ? <Error error={error} /> : null}

        {loading ? <LoadingThing /> : null}
      </this.container>
    );
  }
}

export default VizContainer;
