import React from "react";
import "./index.css";
import Header from "./components/Header";
import Results from "./components/Results";
import Searchbox from "./components/Searchbox";
import BacktoTop from "./components/BacktoTop";

const name = require("@rstacruz/startup-name-generator");

class App extends React.Component {
  state = {
    headerText: "Name Generator",
    expanded: true,
    suggestedNames: [],
  };

  handleInputChange = (inputtext) => {
    this.setState({
      expanded: !(inputtext.length > 0),
      suggestedNames: name(inputtext),
    });
  };

  render() {
    return (
      <>
        <Header
          headerTitle={this.state.headerText}
          headerExpanded={this.state.expanded}
        />
        <Searchbox inputChangeProp={this.handleInputChange} />
        <Results
          nameArr={this.state.suggestedNames}
          display={this.state.expanded}
        />
        <BacktoTop />
      </>
    );
  }
}

export default App;
