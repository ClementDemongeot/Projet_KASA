import imageHomeBanner from '/src/assets/images/Image source 1.png'
import './banner.css';

export default function Banner () {
  return (
    <div className='banner'>
      <img className='banner-img' src={imageHomeBanner} alt="imageBanner"/>
      <div className='banner-content'>
        <p className='banner-text'>Chez vous, partout et ailleurs</p>
      </div>
    </div>
  )
};



