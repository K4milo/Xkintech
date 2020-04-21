import {
    HeroSlider
} from '../components/_slider'

function buildMotivators() {
    const selector = $('.motivators-wrapper');
    const paramSlider = {
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        customPaging: (slider, i) => {
            let index = i += 1;
            return '<a class="pager__item"> ' + index + ' </a>';
        },
    };

    const slider = new HeroSlider(paramSlider, selector);
    slider.initSlider();
}

export {
    buildMotivators
}