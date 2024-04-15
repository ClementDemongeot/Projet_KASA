import imageHomeBanner from '/src/assets/images/Image source 1.png'
import imageAboutbanner from '../../assets/images/Image source 2.png'
import './banner.css';

export function Banner1 () {
  return (
    <div className='banner-container'>
    <div className='banner'>
      <img className='banner-img' src={imageHomeBanner} alt="imageHomeBanner"/>
      <div className='banner-content'>
        <p className='banner-text'>Chez vous, partout et ailleurs</p>
      </div>
    </div>
    </div>
  )
};

export function Banner2 () {
  return (
    <div className='banner-container'>
    <div className='banner'>
      <img className='banner-img2' src={imageAboutbanner} alt="imageAboutBanner"/>
    </div>
    </div>
  )
}




