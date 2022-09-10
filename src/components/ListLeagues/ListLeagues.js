import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GETapi } from "../../Api";
import ListTeams from "../ListTeams/ListTeams";
import Standings from "../Standings/Standings";

export default function Header() {
	const [leaguesList, setLeaguesList] = useState([null]);
	const params = useParams();

	useEffect(() => {
		GETapi(
			`https://apiv2.apifootball.com/?action=get_leagues&country_id=${params.id}&APIkey=5f990ce48ebc7388ba775b57240a09e34a74f3ac19ce1d51ee35839a1e2ce4e2`
		).then((res) => setLeaguesList(res));
	}, [params.id]);

	return (
		<div className="Test">
			<p>Leagues</p>
			{leaguesList.map((league, index) => (
				<p key={index}>
					<img src={league?.league_logo} alt={league?.league_name} />
					{league?.league_name}
				</p>
			))}
			<ListTeams league={leaguesList[0]?.league_id} />
			<Standings league={leaguesList[0]?.league_id} />
		</div>
	);
}
