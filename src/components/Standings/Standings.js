import React, { useEffect, useState } from "react";
import { GETapi } from "../../Api";
import "./style.scss";

export default function Standings({ league }) {
	const [standings, setStandings] = useState([null]);
	const leagueGana = 177;

	useEffect(() => {
		GETapi(
			`https://apiv2.apifootball.com/?action=get_standings&league_id=149&APIkey=5f990ce48ebc7388ba775b57240a09e34a74f3ac19ce1d51ee35839a1e2ce4e2`
		).then((res) => setStandings(res));
	}, [leagueGana]);

	return (
		<section className="sec--standings">
			<h2>Standings</h2>
			<div className="block--table">
				<table>
					<thead>
						<tr>
							<th>Team</th>
							<th>Played games</th>
							<th>Win</th>
							<th>Draw</th>
							<th>Loses</th>
							<th>Goals</th>
							<th>Points</th>
						</tr>
					</thead>
					<tbody>
						{standings.map((team, index) => (
							<tr key={index}>
								<td>{team?.team_name}</td>
								<td>{team?.overall_league_payed}</td>
								<td>{team?.overall_league_W}</td>
								<td>{team?.overall_league_D}</td>
								<td>{team?.overall_league_L}</td>
								<td>
									{team?.overall_league_GF}:
									{team?.overall_league_GA}
								</td>
								<td>{team?.overall_league_PTS}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
}
