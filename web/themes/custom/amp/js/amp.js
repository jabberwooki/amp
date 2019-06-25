(function ($) {
    Drupal.behaviors.news = {
      attach: function (context, settings) {
        //Actus hauteur titre
        $(".wrapper-title").matchHeight();
        $(".node--type-news.node--view-mode-teaser .field--name-field-summary").matchHeight();

        console.log('dans amp.js');
        var legend = $(".region-highlighted picture img").attr('title');
        console.log(legend);
        $(".region-highlighted picture").after('<div class="image-caption">' + legend  + '</div>');
      }
    };
})(jQuery);