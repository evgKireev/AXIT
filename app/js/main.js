$(function() {

  $('.tabs__list-item').on('click', function(e) {
    e.preventDefault();
    $('.tabs__list-item').removeClass('tabs__list-item--active');
    $(this).addClass('tabs__list-item--active');
    $('.tabs__item').removeClass('tabs__item--active');
    $($(this).attr('href')).addClass('tabs__item--active');
  });
});