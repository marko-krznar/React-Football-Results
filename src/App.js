import React, { Component } from "react";
import ListClubs from "./components/ListClubs";
import "./style.scss";

export default class App extends Component {
  render() {
    return (
      <div>
        <ListClubs />
      </div>
    );
  }
}
