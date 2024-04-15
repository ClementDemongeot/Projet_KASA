import './footer.css'
import logoKasaBlack from '/src/assets/images/KASA_LOGO2.png'

export default function Footer() {
  return (
    <>
    <div className='footer-container'>
    <div className='footer'>
      <div className='footer-content'>
        <img className='footer-logo' src={logoKasaBlack} alt='logoKasaBlack'/>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
    </div>
    </>
  )
}