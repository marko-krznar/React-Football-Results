import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Fixtures from "./components/Fixtures/Fixtures";
import ListTeams from "./components/ListTeams/ListTeams";
import Standings from "./components/Standings/Standings";
import Header from "./containers/Header/Header";
import Homepage from "./containers/Homepage/Homepage";
import Team from "./containers/Team/Team";
import "./style.scss";

export default class App extends Component {
  render() {
    return (
      <div>
        <Homepage />
        <Header />
        <Routes>
          <Route path="/" element={<Fixtures />} />
          <Route path="/teams" element={<ListTeams />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/team/:teamKey" element={<Team />} />
          <Route
            path="*"
            element={
              <main>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div>
    );
  }
}
