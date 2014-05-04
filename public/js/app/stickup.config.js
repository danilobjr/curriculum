'use strict';

jQuery(function($) {
  // setting locale globally, so, this way, js files can access this property
  window.locale = '<%= locale %>';

  $(document).ready(function () {
    //enabling stickUp on the '.navbar-wrapper' class
    $('.navbar-wrapper').stickUp({
      parts: {
        0: 'banner',
        1: 'aboutme',
        2: 'technical',
        3: 'exprience',
        4: 'education',
        5: 'protfolio',
        6: 'contact'
      },
      itemClass: 'menuItem',
      itemHover: 'active',
      topMargin: 'auto'
    });
  });

  $('.navbar.navbar-inverse.navbar-static-top a').click(function() {
    $('.navbar-collapse').addClass('hideClass');
  });

  $('.navbar.navbar-inverse.navbar-static-top a').click(function() {
    $('.navbar-collapse').addClass('collapse');
  });

  $('.navbar.navbar-inverse.navbar-static-top a').click(function() {
    $('.navbar-collapse').removeClass('in');
  });

  $('.navbar-toggle').click(function() {
    $('.navbar-collapse').removeClass('hideClass');
  });
});
