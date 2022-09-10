import React, { useEffect, useState } from "react";
import { GETapi } from "../../Api";
import "./style.scss";

export default function Homepage() {
	const [leagueName, setLeagueName] = useState([null]);

	useEffect(() => {
		GETapi(
			`  https://apiv2.apifootball.com/?action=get_leagues&APIkey=5f990ce48ebc7388ba775b57240a09e34a74f3ac19ce1d51ee35839a1e2ce4e2`
		).then((res) => setLeagueName(res));
	}, []);

	return (
		<div className="page page--homepage">
			<div className="block--subheader">
				<h2>Welcome to Football Results</h2>
				<p>
					This app shows football results, fixtures, teams and
					standing. Main purpose of this app is ReactJS and API
					exercises.
				</p>
			</div>
			<div className="block--league-info d-flex justify-content-center align-items-center">
				<img
					src={leagueName[0]?.league_logo}
					alt={leagueName[0]?.league_name}
				/>
				<div className="block--info">
					<h2>{leagueName[0]?.league_name}</h2>
					<p>Season {leagueName[0]?.league_season}</p>
				</div>
			</div>
		</div>
	);
}
