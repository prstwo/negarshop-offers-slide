<template>
  <div class="w-full h-full flex flex-col justify-cnter content-center items-center">
    <section class="w-full lg:w-3/4 mx-auto pt-2 home-offers-section ">
      <div class="">
        <div class="block lg:hidden font-bold text-xl my-4 text-black text-opacity-50">
          پیشنهاد های شگفت انگیز
        </div>
        <div class="flex flex-row flex-nowrap">
          <div class="offers-banner hidden lg:block site-radius">
            <div class="w-full h-full">
              <img class="site-radius w-full h-full" :src="require('../src/assets/images/banner-side.jpg')" alt="" >
            </div>
          </div>
          <div class="lg:pr-4 w-full offers-content-container">
            <div class="w-full  bg-gray-50 site-radius incredible-gallery-container flex flex-row flex-nowrap " dir="ltr">
              <div class="w-full offers-content-wrapper" dir="rtl">
                <div class="vije-slider-content swiper-container swiper-container-vije">
                  <div class="w-full   site-radius bg-white overflow-x-hidden h-full relative swiper-wrapper ">
                    <!--                  gallery main-->
                    <div v-for="(offer, index) in offers" v-bind:key="offer.id" class=" w-full  bg-white site-radius h-full  relative top-0 left-0 swiper-slide " :class="index==0 ? 'active' : ''"  :data-id="index">
                      <div class=" flex flex-col flex-nowrap justify-start p-4 h-full w-full ">
                        <div class="flex flex-col sm:flex-row flex-nowrap h-full w-full">
                          <div class="w-full sm:w-2/5 h-full  relative">
                            <!--                         sale badge-->
                            <div class="ribbon-discount absolute top-4 -left-2 sm:left-4">
                              <svg width="70" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 175.92 174"><g class="cls-1"><g id="Layer_2" data-name="Layer 2"><g id="OBJECTS">
                                <path class="cls-3" d="M148.38,109.14a53,53,0,0,1-1-7.61,31,31,0,0,1,.26-4.62c.24-2,1-2.49-1-3,1.15.19,1.36.62,1.63-.66a29.28,29.28,0,0,1,4.65-10.79c3.67-5.74,5.86-11.34,4.41-18.28-1.66-7.92-6.74-12.43-13.6-16.13a32.52,32.52,0,0,1-14.38-15.4c-2.57-6-3.7-12.09-9.33-16.16S107.12,10.76,100.39,13c-5.47,1.82-10.11,4.21-16,4.52a30.72,30.72,0,0,1-11.16-1.26c-2.64-.87-5.21-1.93-7.91-2.59a21.82,21.82,0,0,0-22.07,8.82C40.62,26.27,40,30.8,38.47,35a27.38,27.38,0,0,1-2.82,5.62c-.23.35-1.78,2.32-1.58,2.48l1,.8c-.24-.17-.91-.88-1.19-.87a31.29,31.29,0,0,1-3.67,4.21c-2.45,2.34-5.37,4-8.19,5.79a21.62,21.62,0,0,0-6.13,30.78,59.05,59.05,0,0,1,5,7.67,30.42,30.42,0,0,1,1.88,5.14c.36,1.33.51.89,1.68.61-1.18.31-1.5,0-1.17,1.35a31,31,0,0,1,.83,5.43c.22,4.06-.81,8-.81,12.08C23.2,123.65,28,131,34.47,134.61c5.64,3.18,11.83,2.1,17.9,3.35a32.69,32.69,0,0,1,15.86,8.49c4.52,4.35,8.57,8.4,15.12,9.21,7.84,1,14.48-1.72,19.77-7.44,4.6-5.06,9.13-9.1,15.71-11.46,7-2.49,14.64-1.11,20.89-5.69A22,22,0,0,0,148.38,109.14Z"></path><circle class="cls-4" cx="84.87" cy="80.93" r="56.59" transform="translate(-32.37 83.72) rotate(-45)"></circle></g></g></g></svg>
                              <span class="count">
                            <span class="text-xl font-bold">
                              {{offer.percent}}
                            </span>
                            <i class="fas fa-percent text-xs"></i>
                        </span>
                            </div>

                            <div class="hidden sm:block sm:w-full h-full">
                              <a :href="offer.href" class="flex flex-col justify-center content-center w-full h-full " >
                                <img :src="offer.src" alt="" class="w-full h-auto">
                              </a>
                            </div>
                            <div class="block mb-4 sm:hidden">
                              <img :src="offer.src" alt="" class="w-full h-auto">
                            </div>
                          </div>
                          <div class="w-full sm:w-3/5 h-full flex flex-col content-center items-center relative text-center">
                            <h2>
                              <a href="" class="font-bold text-xl one-line">
                                {{offer.title}}
                              </a>
                            </h2>
                            <div class="gallery-main-price mt-2 mb-4 font-bold text-lg">
                        <span  class="old-price">
                                            <del>
                                                {{ offer.oldPrice }}
                                               </del>
                                        تومان
                                        </span>
                                         <span class="new-price">
                                            <span >
                                                {{ offer.newPrice }}
                                            </span>
                                              تومان
                                        </span>
                            </div>
                            <div class="gallery-main-list text-right mb-4 text-lg font-medium">
                              <ul>
                                <li v-for="(list, index) in offer.lists" :key="index">
                                       <span>
                                              {{list.title}}
                                       </span>
                                  <span>
                                              {{list.details}}
                                       </span>
                                </li>
                              </ul>
                            </div>
                            <div @mouseover="countDown(index, offers.countdownRemain)" class="gallery-main-countdown w-full mb-10" v-if="hasCountdown">
                                <span id="seconds{{index}}" class="number-countdown-container number-countdown-seconds">
                                    <span></span>
                                </span>
                              <span id="minutes{{index}}" class="number-countdown-container number-countdown-minutes">
                                <span></span>
                            </span>
                              <span id="hours{{index}}" class="number-countdown-container number-countdown-hour">
                                <span></span>
                            </span>
                              <span id="days{{index}}" class="number-countdown-container number-countdown-day">
                                <span></span>
                            </span>
                            </div>


                            <div class="gallery-main-progress w-full  font-bold">
                              <div class="w-full flex flex-row justify-between">
                                <div>
                                <span class="">
                                فروش:
                              </span>
                                  <span>
                                {{offer.sell}}
                              </span>
                                </div>
                                <div>
                                <span class="">موجودی
                                :
                                </span>
                                  <span>
                                    {{offer.inStock}}
                                </span>
                                </div>
                              </div>
                              <div class="w-full">
                                <progress class="w-full"  :value="offer.sold" :max="offer.numbers"> {{offer.sold-percent}}% </progress>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="offers-swiper-pagination-container  hidden  lg:block  ">
                    <div class="lg:ml-4 gallery-links flex flex-col">
                      <ul class="offers-lists swiper-pagination">

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="hidden  lg:block  space-offers-wrapper flex-grow">

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    <div id="php-to-js" class="hidden" >
      <li class=' pl-2  swiper-pagination- js-swiper-pagination-bullet mb-2' v-for="offer in offers" v-bind:key="offer.id">
        <div class='w-full block  pl-2 gallery-links-link text-right'>
          {{offer.title}}
        </div>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
  return {
    offers:
        [
          { id: 0
            ,title:
                'کامپیوتر همه کاره 21.5 اینچی اپل مدل iMac MMQA2 2017'
            , href:''
            ,src:require('@/assets/images/phone-1.jpg')
            ,percent:'10'

            ,oldPrice:12100000
            ,newPrice:11500000
            ,lists: [
              {
                title:
                    'حافظه داخلی'
                ,details:
                    '64 گیگابایت'
              }
              ,{
                title:
                    'قابلیت پخش صوتی '
                ,details:
                    'دارد'
              }
              ,{
                title:
                    'سری پردازنده: '
                ,details:
                    'Core i5'
              }
            ]
            ,countdown:'true'
            ,countdownRemain:'2022-04-13 23:59:59'
            ,sell:'445'
            ,inStock:
                'موجود'
            ,numbers:'100'
            ,sold:'90'
            ,soldPercent:'90'}
          ,{ id: 1
          ,title:
              'گوشی موبایل شیائومی پوکو F3'
          , href:''
          ,src:require('@/assets/images/phone-2.jpg')
          ,percent:'30'

          ,oldPrice:12100000
          ,newPrice:11500000
          ,lists: [
          {
            title:
    'حافظه داخلی'
        ,details:
    '248 گیگابایت'
          }
          ,{
              title:
              'قابلیت پخش صوتی '
                ,details:
              'دارد'
            }
            ,{
                title:
                'سری پردازنده: '
                    ,details:
                'Core i5'
              }
               ]
          ,countdown:'true'
          ,countdownRemain:'2021-12-13 23:30:59'
          ,sell:'445'
          ,inStock:
              'موجود'
          ,numbers:'100'
          ,sold:'40'
          ,soldPercent:'40'}
          ,{ id: 3
          ,title:
              'گوشی موبایل شیائومی پوکو x3'
          , href:''
          ,src:require('@/assets/images/phone-3.jpg')
          ,percent:'30'

          ,oldPrice:6900000
          ,newPrice:6500000
          ,lists: [
          {
            title:
    'حافظه داخلی'
        ,details:
    '64 گیگابایت'
          }
          ,{
              title:
              'قابلیت پخش صوتی '
                ,details:
              'دارد'
            }
            ,{
                title:
                'سری پردازنده: '
                    ,details:
                'Core i5'
              }
               ]
          ,countdown:'true'
          ,countdownRemain:'2021-12-13 23:30:59'
          ,sell:'445'
          ,inStock:
              'موجود'
          ,numbers:'100'
          ,sold:'40'
          ,soldPercent:'40'}


        ]
        ,makeTimer(pid,date) {
      date = date.replace(' ','T');
      var endTime = Date.parse(date)/ 1000;
      var now = new Date()/ 1000;
      var timeLeft = endTime - now;
      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
      var minutes = Math.floor((timeLeft - (days * 86400) - (hours *
          3600)) / 60);
      var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600)
          - (minutes * 60)));

      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      if (days > 0) {
        document.querySelector(`#days${pid} span`).innerHTML=days;
      }
      else{
        document.querySelector(`#days${pid} span`).innerHTML='';
      }
      document.querySelector(`#hours${pid} span`).innerHTML=hours ;
      document.querySelector(`#minutes${pid} span`).innerHTML=minutes;
      document.querySelector(`#seconds${pid} span`).innerHTML=seconds; }

  }
}
  ,mounted() {

  }
  ,computed: {
    hasCountdown(){
      return this.offers.countdown =='true'
    }
  }
  ,methods:{
  countDown(index, remain){
      setInterval(function (){
        this.makeTimer(index,remain)
      }, 100000)
    }

  }
}

</script>



