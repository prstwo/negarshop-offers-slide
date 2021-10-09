import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/fontawesome.css';
import '@/index.css';
import '@/assets/main.css';
/*swiper*/
import Swiper from 'swiper/swiper-bundle';
import 'swiper/swiper-bundle.css';

createApp(App).mount('#app');
/* eslint-disable no-unused-vars */
var swiper = new Swiper('.swiper-container-vije', {

    slidesPerView: 1,
    autoplay:  {
        delay: 3000,
        disableOnInteraction:false,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index) {

            return `<li class='cursor-pointer pl-2  swiper-pagination-bullet js-swiper-pagination-bullet mb-2' >
                        ${ document.querySelectorAll(' #php-to-js .js-swiper-pagination-bullet')[index].innerHTML
            }
                     </li>`;
        },
    }

    ,loop:true
});
/* eslint-enable no-unused-vars */


