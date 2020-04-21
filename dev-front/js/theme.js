import $ from 'jquery'

import {
  buildSlider
} from './views/_view-slider';

import {
  buildMotivators
} from './views/_motivators';

import {
  imageBackground,
  scrollAddClass
} from './sideffects'

window.$ = window.jQuery = $

function init() {
  scrollAddClass();
  buildSlider();
  buildMotivators();
  imageBackground();
}

document.addEventListener('DOMContentLoaded', () => init())