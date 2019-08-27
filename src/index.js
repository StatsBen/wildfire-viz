require("dotenv");
import React from "react";
import ReactDOM from "react-dom";
import VizContainer from "./viz/VizContainer";
require("./styles/styles.css");

class App extends React.Component {
  render() {
    return (
      <div id="main">
        <VizContainer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
