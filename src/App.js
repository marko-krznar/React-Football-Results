import React, { Component } from "react";
import ListClubs from "./components/ListClubs";
import Header from "./containers/Header/Header";
import "./style.scss";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ListClubs />
      </div>
    );
  }
}
