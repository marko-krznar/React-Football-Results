import React, { useEffect, useState } from "react";
import { GETapi } from "../../Api";

export default function Header() {
  const [countriesList, setCountriesList] = useState([]);

  // Get countries
  useEffect(() => {
    GETapi(
      "https://apiv3.apifootball.com/?action=get_countries&APIkey=5f990ce48ebc7388ba775b57240a09e34a74f3ac19ce1d51ee35839a1e2ce4e2"
    ).then((res) => setCountriesList(res));
  }, []);

  return (
    <nav className="menu">
      <p>Country</p>
      <ul>
        {countriesList.map((country, index) => (
          <li key={index}>{country?.country_name}</li>
        ))}
      </ul>
    </nav>
  );
}