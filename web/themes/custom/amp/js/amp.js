(function ($) {
    Drupal.behaviors.news = {
      attach: function (context, settings) {

    //Actus hauteur titre
    $(".wrapper-title").matchHeight();
    $(".node--type-news.node--view-mode-teaser .field--name-field-summary").matchHeight();

        }
    };
})(jQuery);