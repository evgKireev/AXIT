$(function() {

  $('.reviews__inner').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [{
      breakpoint: 880,
      settings: "unslick"
    }, ],
    mobileFirst: true,


  });

  $('.menu__btn').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn').toggleClass('menu__btn--active');
  });

  $('.menu__list-item').on('click', function() {
    $('.menu__list').removeClass('menu__list--active');
    $('.menu__btn').removeClass('menu__btn--active');
  });


  $('.tabs__list-item').on('click', function(e) {
    e.preventDefault();
    $('.tabs__list-item').removeClass('tabs__list-item--active');
    $(this).addClass('tabs__list-item--active');
    $('.tabs__item').removeClass('tabs__item--active');
    $($(this).attr('href')).addClass('tabs__item--active');
  });
});