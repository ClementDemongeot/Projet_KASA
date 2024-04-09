import { Link } from 'react-router-dom';
import logoKasaRed from '/src/assets/images/KASA_LOGO.png'
import './header.css'

export default function Header () {
  return (
    <div className='header'>
      <img src={logoKasaRed} alt ="logoKasaRed"/>
      <div className='header-text'>
        <Link className='header-link' to="/">Acceuil</Link>
        <Link className='header-link' to="/about">A propos</Link>
      </div>
    </div>
  )
}


