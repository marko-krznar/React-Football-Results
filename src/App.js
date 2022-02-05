import React, { Component } from "react";
import ListLeagues from "./components/ListLeagues/ListLeagues";
import Header from "./containers/Header/Header";
import "./style.scss";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ListLeagues />
      </div>
    );
  }
}
