import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Chintan",
        },
        {
          name: "Yash",
        },
        {
          name: "rupam",
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster, k) => (
          <h1 key={k}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
