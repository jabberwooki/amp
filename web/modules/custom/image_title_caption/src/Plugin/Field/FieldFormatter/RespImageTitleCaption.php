<?php

/**
 * @file
 * Contains \Drupal\image_title_caption\Plugin\Field\FieldFormatter\ImageTitleCaption
 */

namespace Drupal\image_title_caption\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\responsive_image\Plugin\Field\FieldFormatter\ResponsiveImageFormatter;

/**
 * Plugin implementation of the 'resp_image_title_caption' formatter.
 *
 * @FieldFormatter(
 *   id = "resp_image_title_caption",
 *   label = @Translation("Image adaptative avec une légende à partir du titre"),
 *   field_types = {
 *     "image"
 *   }
 * )
 */
class RespImageTitleCaption extends ResponsiveImageFormatter {

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $elements = parent::viewElements($items, $langcode);
    foreach ($elements as &$element) {
      $element['#theme'] = 'resp_image_title_caption_formatter';
    }

    return $elements;
  }
}
