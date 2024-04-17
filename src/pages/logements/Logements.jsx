import '../logements/logements.css'
import Layout from '../../layouts/Layout'
import Footer from '../../components/Footer/Footer'
import { useParams } from 'react-router-dom'
import  SlideLogement from '../../components/SlideLogement/SlideLogements'
import LogementsData from '../../assets/logements.json'
import Collapse from '../../components/Collapse/Collapse'
import RatingStarInactive from '../../assets/images/star-rating-inactive.png'
import RatingStarActive from '../../assets/images/star-rating-active.png'


export default function Logements (){

  let params = useParams();
  const currentLogement = LogementsData.find((logement) => {
    return logement.id === params.id 
  })

  const ratingStars = [];
  for (let i = 0; i < 5; i++) {
      if (i < currentLogement.rating) {
        ratingStars.push(<img key={i} src={RatingStarActive} alt='active' />);
      } else {
        ratingStars.push(<img key={i} src={RatingStarInactive} alt='inactive' />);
    }
  }

  return (
    <div>
      <Layout />
      <div className='logement-container'>
        <div className='logement-content'>
            <SlideLogement images={currentLogement.pictures} key={currentLogement.id} />
          <div className='logement-title-owner-container'>
            <div className='logement-title'>
              <h1 className='logement-h1'>{currentLogement.title}</h1>
              <p className='logement-location'>{currentLogement.location}</p>
            </div>
            <div className='logement-owner'>
              <p className='logement-owner-texte'>{currentLogement.host.name}</p>
              <img className='logement-owner-img' src={currentLogement.host.picture}/>
            </div>
          </div>

          <div className='logement-tags-rating-container'>
            <div className='logement-tags'>
              {currentLogement.tags.map((tags, id) =>(
                <div key={id} className='tag'>{tags}</div>
              ))}
            </div>
            <div className='logement-rating'>
              <div className='rating-stars'>{ratingStars} </div>
            </div>
          </div>
          
          <div className='logement-collapse'>
              <Collapse title="Description" content={currentLogement.description} />
              <Collapse title="Équipements" content={
                <div className='equipments-content-column'>
                {currentLogement.equipments.map((equipment, id) => (
                  <div key={id}>{equipment}</div>
                    ))}
                  </div>
              }/>
              
          </div>

        </div>
      </div>
      <Footer />
    </div>

    
  )
}