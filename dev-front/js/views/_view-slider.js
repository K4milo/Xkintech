import {
  HeroSlider
} from '../components/_slider'

function buildSlider() {
  const selector = $('.customers-wrapper');
  const paramSlider = {
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  }
  const slider = new HeroSlider(paramSlider, selector)
  slider.initSlider()
}

export {
  buildSlider
}