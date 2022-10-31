// 載入loading畫面
$(window).on('load', function () {
  setTimeout(function () {
    $('.loading').addClass('is-loaded');
  }, 1000);
});


// RWD menu
$(document).ready(function () {
  $(".headerMain .headerBurger").click(function () {
    $(".headerNav").toggleClass('active');
    $(".headerMain .headerBurger").toggleClass('active');
  });
});

// swiper
const swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

// 切換list內容
let index = 0;
$('.productFilter li').eq(index).addClass('active');
$('.productListItem').eq(index).show();

$('.productFilter li').on('click', function () {
  index = $(this).index();

  $('.productListItem').hide();
  $('.productListItem').eq(index).fadeIn();

  $('.productFilter li').removeClass('active');
  $('.productFilter li').eq(index).addClass('active');


});
