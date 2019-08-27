require("dotenv");
import React from "react";
import ReactDOM from "react-dom";
import Paragraph from "./Paragraph";
import Title from "./Title";
import VizContainer from "./viz/VizContainer";
import { contents } from "./contents.js";
require("./styles/styles.css");

class App extends React.Component {
  render() {
    return (
      <div id="main">
        <Title />
        {contents.map((p, i) => (
          <Paragraph key={`p-${i}`} content={p} />
        ))}
        <VizContainer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
