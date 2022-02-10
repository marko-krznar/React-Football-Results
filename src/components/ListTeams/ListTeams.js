import React, { useEffect, useState } from "react";
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
    <div>
      <h2>Teams</h2>
      <ol>
        {teamsList.map((team, index) => (
          <li key={index}>
            <img src={team?.team_badge} alt={team?.team_name} />
            {team?.team_name}
          </li>
        ))}
      </ol>
    </div>
  );
}
