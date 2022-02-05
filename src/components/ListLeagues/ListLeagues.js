import React, { useEffect, useState } from "react";
import { GETapi } from "../../Api";

export default function Header() {
  const [leaguesList, setLeaguesList] = useState([]);

  useEffect(() => {
    GETapi(
      "https://apiv3.apifootball.com/?action=get_leagues&APIkey=5f990ce48ebc7388ba775b57240a09e34a74f3ac19ce1d51ee35839a1e2ce4e2"
    ).then((res) => setLeaguesList(res));
  }, []);

  return (
    <nav className="menu">
      <p>Leagues</p>
      <ul>
        {leaguesList.map((league, index) => (
          <li key={index}>{league?.league_name}</li>
        ))}
      </ul>
    </nav>
  );
}
