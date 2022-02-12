import React, { useEffect, useState } from "react";
import { GETapi } from "../../Api";
import "./style.scss";
import { format, addDays, subDays } from "date-fns";

export default function Fixtures() {
  const [fixtures, setFixtures] = useState([null]);
  const [results, setResults] = useState([null]);
  const startDate = format(new Date(), "yyyy-MM-dd");
  const endDate = format(addDays(new Date(), 10), "yyyy-MM-dd");
  const yesterday = format(subDays(new Date(), 1), "yyyy-MM-dd");
  const pastDate = format(subDays(new Date(), 11), "yyyy-MM-dd");

  useEffect(() => {
    GETapi(
      `https://apiv3.apifootball.com/?action=get_events&from=${startDate}&to=${endDate}&league_id=177&APIkey=5f990ce48ebc7388ba775b57240a09e34a74f3ac19ce1d51ee35839a1e2ce4e2`
    ).then((res) => setFixtures(res));
  }, [startDate, endDate]);

  useEffect(() => {
    GETapi(
      `https://apiv3.apifootball.com/?action=get_events&from=${pastDate}&to=${yesterday}&league_id=177&APIkey=5f990ce48ebc7388ba775b57240a09e34a74f3ac19ce1d51ee35839a1e2ce4e2`
    ).then((res) => setResults(res));
  }, [yesterday, pastDate]);

  return (
    <section className="sec--fixtures d-flex">
      <div className="block--results">
        <div className="block--headline">
          <h2>Results</h2>
          <p>
            {pastDate} - {yesterday}
          </p>
        </div>

        {results.map((result, index) => (
          <div className="block--match" key={index}>
            <p>
              Match round {result?.match_round || "No data"} -{" "}
              {result?.match_date || "No data"}
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span>{result?.match_time || "No data"}</span>
              </div>
              <div>
                <span>{result?.match_hometeam_name || "No data"} </span>
                <span>{result?.match_awayteam_name || "No data"} </span>
              </div>
              <div>
                <span>{result?.match_hometeam_score || "-"}</span>
                <span>{result?.match_awayteam_score || "-"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="block--fixtures">
        <div className="block--headline">
          <h2>Fixtures</h2>
          <p>
            {startDate} - {endDate}
          </p>
        </div>
        {fixtures.map((fixture, index) => (
          <div className="block--match" key={index}>
            <p>
              Match round {fixture?.match_round || "No data"} -{" "}
              {fixture?.match_date || "No data"}
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span>{fixture?.match_time || "No data"}</span>
              </div>
              <div>
                <span>{fixture?.match_hometeam_name || "No data"} </span>
                <span>{fixture?.match_awayteam_name || "No data"} </span>
              </div>
              <div>
                <span>{fixture?.match_hometeam_score || "-"}</span>
                <span>{fixture?.match_awayteam_score || "-"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
