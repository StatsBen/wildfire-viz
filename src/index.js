import React from "react";
import ReactDOM from "react-dom";
import MainView from "./MainView";

class App extends React.Component {
  render() {
    return (
      <div id="main">
        <MainView />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
