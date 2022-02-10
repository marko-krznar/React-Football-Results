import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
// import ListLeagues from "./components/ListLeagues/ListLeagues";
// import Header from "./containers/Header/Header";
import Homepage from "./containers/Homepage/Homepage";
import "./style.scss";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <Routes>
          {/* <Route path=":id" element={<ListLeagues />} /> */}
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    );
  }
}
