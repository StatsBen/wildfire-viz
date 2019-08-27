import React from "react";
import Error from "./Error";
import Header from "./Header";
import LoadingThing from "./LoadingThing";
import { dateTools } from "../utils";

class VizContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      ready: false,
      error: null,
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

  getFires = () => {
    const { year, date, state, urlBase } = this.state;

    if (!urlBase) this.handleError("URL Base is not defined!", null);

    let req = "fires/";

    if (date) req += "burningOn=" + dateTools.formatDateForQuery(date);
    if (state); // deal with this later...
    if (year); // deal with this later...

    console.log("Getting fires from: " + urlBase + req);

    fetch(urlBase + req).then(
      res => {
        console.log("Success!!");
        console.log(res);
        this.setState({ fires: res.json(), ready: true, loading: false });
      },
      err => {
        this.handleError("Error getting data from database!", err);
      }
    );
  };

  componentDidMount() {
    const isDev = process.env.NODE_ENV == "development";
    const devURL = "http://localhost:3001/";
    const realURL = null; //<- TODO make this real at some point...
    const urlBase = isDev ? devURL : realURL;
    this.setState({ urlBase }, this.getFires);
  }

  render() {
    const { error, loading, ready } = this.state;
    return (
      <div>
        {ready ? <Header /> : null}
        {error ? <Error error={error} /> : null}
        {loading ? <LoadingThing /> : null}
      </div>
    );
  }
}

export default VizContainer;
