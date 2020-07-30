import $ from 'jquery';

$(window).scroll(function() {
  $('.menu-container, .fixed-menu, .close-mobile-menu').toggleClass('scrolled', $(this).scrollTop() > 0);
});