/**
 * Created by ubuntu on 17/05/19.
 */

(function ($) {
  Drupal.behaviors.initCarousel = {
    attach: function (context, settings) {

      console.log('dans amp-carousel.js');

      $('.paragraph--type--carousel-100 .field--items').slick({
        dots: true,
        speed: 1500,
        autoplay: false,
        arrows: true,
        fade: true
      });
    }
  };
})(jQuery);