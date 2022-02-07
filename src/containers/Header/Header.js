import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GETapi } from "../../Api";

export default function Header() {
  const [countriesList, setCountriesList] = useState([]);

  // Get countries
  useEffect(() => {
    GETapi(
      "https://apiv3.apifootball.com/?action=get_leagues&APIkey=5f990ce48ebc7388ba775b57240a09e34a74f3ac19ce1d51ee35839a1e2ce4e2"
    ).then((res) => setCountriesList(res));
  }, []);

  return (
    <nav className="menu">
      <p>Country</p>
      <ul>
        {countriesList.map((country, index) => (
          <Link key={index} to={country?.country_id}>
            {country?.country_name}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
