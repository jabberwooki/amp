(function ($) {
    Drupal.behaviors.news = {
      attach: function (context, settings) {
        //Actus hauteur titre
        $(".wrapper-title").matchHeight();
        $(".node--type-news.node--view-mode-teaser .field--name-field-summary").matchHeight();

        // Insertion d'une légende d'image sur le bloc accueil.
        var legend = $(".region-highlighted picture img").attr('title');
        $(".region-highlighted picture").after('<div class="image-caption">' + legend  + '</div>');

        // Insertion d'une légende d'image sur l'image d'un node actualité.
        var newsLegend = $('.node--type-news.node--view-mode-full .field--name-field-image img').attr('title');
        $(".node--type-news.node--view-mode-full .image-caption").remove();
        $(".node--type-news.node--view-mode-full .field--name-field-image").append('<div class="image-caption">' + newsLegend + '</div>');

        // Donne une valeur différente (0,1,2,etc...) à l'attribut target du lien <a> de chaque logo partenaire.
        var targetValue = 0;
        $(".image-link-image a").each(function() {
          console.log($(this).attr('target', targetValue));
          targetValue++;
        });

      }
    };
})(jQuery);
