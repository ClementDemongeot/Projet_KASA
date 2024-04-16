import '../logements/logements.css'
import Layout from '../../layouts/Layout'
import Footer from '../../components/Footer/Footer'
import { useParams } from 'react-router-dom'
import  SlideLogement from '../../components/SlideLogement/SlideLogements'
import LogementsData from '../../assets/logements.json'


export default function Logements (){

  let params = useParams();
  
  const currentLogement = LogementsData.find((logement) => {
    return logement.id === params.id 
  })
  

  
  return (
    <div>
      <Layout />
      {currentLogement.description}


      <Footer />
    </div>

    
  )
}