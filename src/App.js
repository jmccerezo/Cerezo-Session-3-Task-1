import React, { Component } from "react";
import ResponsiveAppBar from "./AppBar";
import Form from "./Form";
import Display from "./Display";
import "./App.css";

class App extends Component {
  state = {
    personData: [],
  };

  addInfo = (props) => {
    console.log(props);

    let personData = [...this.state.personData, props];

    this.setState({
      personData,
    });
  };

  render() {
    return (
      <>
        <ResponsiveAppBar />
        <div id="container">
          <div id="formContainer">
            <Form addData={this.addInfo} />
          </div>
          <div className="cardContainer">
            <Display personData={this.state.personData} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
