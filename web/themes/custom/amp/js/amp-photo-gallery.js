/**
 * Created by ubuntu on 31/10/19.
 */

(function ($) {
  Drupal.behaviors.photoGalleriesSlider = {
    attach: function (context, settings) {

      // Photo gallery slider : photo display
      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });

      // Photo gallery slider : navigator
      $('.slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        dots: true
      });
    }
  };
})(jQuery);
