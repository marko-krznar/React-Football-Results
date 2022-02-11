import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GETapi } from "../../Api";
import "./style.scss";

export default function ListTeams({ league }) {
  const [teamsList, setTeamsList] = useState([null]);
  const leagueGana = 177;

  useEffect(() => {
    GETapi(
      `https://apiv3.apifootball.com/?action=get_teams&league_id=${leagueGana}&APIkey=5f990ce48ebc7388ba775b57240a09e34a74f3ac19ce1d51ee35839a1e2ce4e2`
    ).then((res) => setTeamsList(res));
  }, [leagueGana]);

  return (
    <section className="sec--teams">
      <h2>Teams</h2>
      <p>
        Look all the teams in the league, click on team to see more info about
        it
      </p>
      <ol className="d-flex flex-wrap">
        {teamsList.map((team, index) => (
          <li className="d-flex direction-column" key={index}>
            <img src={team?.team_badge} alt={team?.team_name} />
            <span>{team?.team_name}</span>
            <Link to={`/team/${team?.team_key}`}>See more</Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
