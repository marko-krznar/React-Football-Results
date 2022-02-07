import React, { useEffect, useState } from "react";
import { GETapi } from "../../Api";
import "./style.scss";

export default function Standings({ league }) {
  const [standings, setStandings] = useState([null]);
  useEffect(() => {
    GETapi(
      `https://apiv3.apifootball.com/?action=get_standings&league_id=${league}&APIkey=5f990ce48ebc7388ba775b57240a09e34a74f3ac19ce1d51ee35839a1e2ce4e2`
    ).then((res) => setStandings(res));
  }, [league]);
  console.log(standings);
  return (
    <div>
      <h2>Standings</h2>
      <table>
        <tr>
          <th>Team</th>
          <th>Points</th>
          <th>Goals</th>
        </tr>
        {standings.map((team, index) => (
          <tr key={index}>
            <td>{team.team_name}</td>
            <td>{team.overall_league_PTS}</td>
            <td>{team.overall_league_GF}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
