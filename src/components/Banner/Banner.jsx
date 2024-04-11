import imageHomeBanner from '/src/assets/images/Image source 1.png'
import imageAboutbanner from '../../assets/images/Image source 2.png'
import './banner.css';

export function Banner1 () {
  return (
    <div className='banner'>
      <img className='banner-img' src={imageHomeBanner} alt="imageHomeBanner"/>
      <div className='banner-content'>
        <p className='banner-text'>Chez vous, partout et ailleurs</p>
      </div>
    </div>
  )
};

export function Banner2 () {
  return (
    <div className='banner'>
      <img className='banner-img' src={imageAboutbanner} alt="imageAboutBanner"/>
    </div>
  )
}




