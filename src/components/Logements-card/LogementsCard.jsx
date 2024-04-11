import '../Logements-card/logementsCard.css'
import { Link } from 'react-router-dom';

export default function LogementsCard ({id, title, cover}) {
  return (

    <Link to={"/logements"}>
      <div className='logements-card' data-id={id}>
          <div className='card-cover'>
            <img src={cover} alt={title}/>
            <div className='card-content'>
              {title}
            </div>
          </div>
      </div>
    </Link>
  );
}