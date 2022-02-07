import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import ListLeagues from "./components/ListLeagues/ListLeagues";
import Header from "./containers/Header/Header";
import "./style.scss";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path=":id" element={<ListLeagues />} />
        </Routes>
        {/* <ListLeagues /> */}
        {/* <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route>
          </Route>
        </Routes> */}
      </div>
    );
  }
}
