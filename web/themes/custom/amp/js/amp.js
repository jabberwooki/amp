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
          targetValue++;
        });

        //////////////  Gestion des champs du formulaire d'inscription /////////////////////////////////////////////////

        // Onglet 2, dépendance des champs Choix N°1 et Choix N°2.
        var select1 = $("#edit-issue-selection");
        var select2 = $("#edit-issue-selection2");

        // A la modification du champ Choix N°1
        select1.change(function() {
          var selected1 = $(this).val();
          var selected2 = select2.find(":selected").val();

          if (selected1 != "") {
            // On cache dans select2 l'option choisie dans select1
            $('#edit-issue-selection2 option').show();
            $('#edit-issue-selection2 option[value="' + selected1 + '"]').hide();
          }
          else {
            $('#edit-issue-selection2 option').show();
          }
        });

        // A la modification du champ Choix N°2
        select2.change(function() {
          var selected2 = $(this).val();
          var selected1 = select1.find(":selected").val();
          
          if (selected2 != "") {
            // On cache dans select1 l'option choisie dans select2
            $('#edit-issue-selection option').show();
            $('#edit-issue-selection option[value="' + selected2 + '"]').hide();
          }
          else {
            $('#edit-issue-selection option').show();
          }
        });

      }
    };
})(jQuery);
