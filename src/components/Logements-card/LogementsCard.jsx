import { logements } from "../../config/routes";
import "../Logements-card/logementsCard.css";
import { Link } from "react-router-dom";

export default function LogementsCard({ logementId, title, cover }) {
  return (
    <Link to={`${logements}/${logementId}`}>
      <div className="logements-card">
        <div className="card-cover">
          <img src={cover} alt={title} />
          <div className="card-content">{title}</div>
        </div>
      </div>
    </Link>
  );
}
