import { Link } from "react-router-dom";
import "./style.scss";

export default function Header() {
  return (
    <nav className="menu d-flex">
      <Link to="/">Results/Fixtures</Link>
      <Link to="/teams">Teams</Link>
      <Link to="/standings">Standings</Link>
    </nav>
  );
}
