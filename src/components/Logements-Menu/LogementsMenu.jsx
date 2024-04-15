import '../Logements-Menu/logementsMenu.css'
import LogementsCard from '../Logements-card/LogementsCard'
import DataLogements from '../../assets/logements.json'


export default function LogementsMenu () {
  return (
    <div className='logements-Menu'>
      <div className='grid-menu'>
        {DataLogements.map((logement) => (
          <LogementsCard 
            key={logement.id}
            title={logement.title}
            cover={logement.cover}
            logementId={logement.id}
          />
          ))} 
      </div>
    </div>
  )
}