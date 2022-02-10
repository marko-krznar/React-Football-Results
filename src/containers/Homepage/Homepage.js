import React from "react";
import Fixtures from "../../components/Fixtures/Fixtures";
import ListTeams from "../../components/ListTeams/ListTeams";
import Standings from "../../components/Standings/Standings";

export default function Homepage() {
  return (
    <div className="page page--homepage d-flex">
      <ListTeams />
      <Standings />
      <Fixtures />
    </div>
  );
}
