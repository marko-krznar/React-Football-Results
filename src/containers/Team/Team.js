import "./style.scss";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GETapi } from "../../Api";

export default function Team() {
	const [team, setTeam] = useState({});
	const params = useParams();
	const noData = "-";

	useEffect(() => {
		GETapi(
			`https://apiv2.apifootball.com/?action=get_teams&team_id=${params.teamKey}&APIkey=5f990ce48ebc7388ba775b57240a09e34a74f3ac19ce1d51ee35839a1e2ce4e2`
		).then((res) => setTeam(res));
	}, [params.teamKey]);

	return (
		<div className="block--team-info">
			<img src={team[0]?.team_badge} alt={team[0]?.team_name} />
			<h2>{team[0]?.team_name}</h2>
			<p>Coach: {team[0]?.coaches[0]?.coach_name || noData}</p>
			<div className="block--table">
				<table>
					<thead>
						<tr>
							<th>Player</th>
							<th>Number</th>
							<th>Age</th>
							<th>Games</th>
							<th>Goals</th>
							<th>Yellow card</th>
							<th>Red card</th>
						</tr>
					</thead>
					<tbody>
						{team[0]?.players.map((player, index) => (
							<tr key={index}>
								<td>{player?.player_name || noData}</td>
								<td>{player?.player_number || noData}</td>
								<td>{player?.player_age || noData}</td>
								<td>{player?.player_match_played || noData}</td>
								<td>{player?.player_goals || noData}</td>
								<td>{player?.player_yellow_cards || noData}</td>
								<td>{player?.player_red_cards || noData}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
