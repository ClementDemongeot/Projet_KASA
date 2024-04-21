import { Link, useLocation } from "react-router-dom";
import logoKasaRed from "/src/assets/images/KASA_LOGO.png";
import "./header.css";

export default function Header() {
  const { pathname } = useLocation();
  const isAccueilPath = pathname === "/";
  const isAProposPath = pathname === "/about";

  return (
    <div className="header-container">
      <div className="header">
        <img className="header-logo" src={logoKasaRed} alt="logoKasaRed" />
        <div className="header-text">
          <Link
            className={`header-link ${isAccueilPath ? "active" : ""}`}
            to="/"
          >
            Accueil
          </Link>
          <Link
            className={`header-link ${isAProposPath ? "active" : ""}`}
            to="/about"
          >
            A propos
          </Link>
        </div>
      </div>
    </div>
  );
}
