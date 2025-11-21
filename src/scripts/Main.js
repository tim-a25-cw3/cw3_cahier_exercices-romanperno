import Icons from './utils/Icons.js';
import Swiper from 'swiper/bundle';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
    this.initSwiper();
  }

  initSwiper() {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 30,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}
new Main();
