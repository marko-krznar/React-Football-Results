import { useEffect, useState } from "react";
import { GETapi } from "../../Api";
import "./style.scss";

import React from "react";

export default function Fixtures() {
  const [fixtures, setFixtures] = useState([null]);
  useEffect(() => {
    GETapi(
      `https://apiv3.apifootball.com/?action=get_events&from=2022-02-10&to=2022-02-28&league_id=177&APIkey=5f990ce48ebc7388ba775b57240a09e34a74f3ac19ce1d51ee35839a1e2ce4e2`
    ).then((res) => setFixtures(res));
  }, []);

  return (
    <section className="sec--fixtures">
      <h2>Fixtures</h2>
      {fixtures.map((fixture, index) => (
        <div className="block--match" key={index}>
          <p>Match round {fixture?.match_round}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <span>{fixture?.match_time}</span>
            </div>
            <div>
              <span>{fixture?.match_hometeam_name} </span>
              <span>{fixture?.match_awayteam_name} </span>
            </div>
            <div>
              <span>{fixture?.match_hometeam_score || "-"}</span>
              <span>{fixture?.match_awayteam_score || "-"}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
