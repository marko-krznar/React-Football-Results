import React, { useEffect, useState } from "react";
import { GETapi } from "../../Api";

export default function Homepage() {
  const [leagueName, setLeagueName] = useState([null]);

  useEffect(() => {
    GETapi(
      `  https://apiv2.apifootball.com/?action=get_leagues&APIkey=5f990ce48ebc7388ba775b57240a09e34a74f3ac19ce1d51ee35839a1e2ce4e2`
    ).then((res) => setLeagueName(res));
  }, []);

  return (
    <div className="page page--homepage">
      <h2>This App shows football results</h2>
      <img src={leagueName[1]?.league_logo} alt={leagueName[1]?.league_name} />
      <h2>League: {leagueName[1]?.league_name}</h2>
      <p>Season {leagueName[1]?.league_season}</p>
    </div>
  );
}
