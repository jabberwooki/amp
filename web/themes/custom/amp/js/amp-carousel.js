/**
 * Created by ubuntu on 17/05/19.
 */

(function ($) {
  Drupal.behaviors.initCarousel = {
    attach: function (context, settings) {

      $('.paragraph--type--carousel-100 .field--items').slick({
        dots: false,
        speed: 1500,
        autoplay: false,
        arrows: true,
        //fade: true
      });

      //$('.paragraph--type--carousel-100 .field--items').slickLightbox({
      //  src: 'src',
      //  itemSelector: '.field--item img'
      //});
    }
  };
})(jQuery);
