import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div id="main">
        <h1>Well... React is working... </h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
