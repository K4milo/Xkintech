import $ from 'jquery'
import {
  buildSlider
} from './views/_view-slider'
import {
  imageBackground,
  scrollAddClass
} from './sideffects'

window.$ = window.jQuery = $

function init() {
  scrollAddClass();
  buildSlider();
  imageBackground();
}

document.addEventListener('DOMContentLoaded', () => init())
