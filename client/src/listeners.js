import $ from 'jquery';

$(window).scroll(function() {
  $('.menu-container, .fixed-menu').toggleClass('scrolled', $(this).scrollTop() > 0);
});