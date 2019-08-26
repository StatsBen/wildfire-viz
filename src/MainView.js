import React from "react";
import Error from "./Error";
import Header from "./Header";
import LoadingThing from "./LoadingThing";

class MainView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: true, ready: false, error: null };
  }

  componentDidMount() {
    // Make API Call here!
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

export default MainView;
