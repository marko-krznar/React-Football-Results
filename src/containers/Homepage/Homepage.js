import React from "react";
import ListTeams from "../../components/ListTeams/ListTeams";
import Standings from "../../components/Standings/Standings";

export default function Homepage() {
  return (
    <div className="page page--homepage d-flex">
      <ListTeams />
      <Standings />
    </div>
  );
}
