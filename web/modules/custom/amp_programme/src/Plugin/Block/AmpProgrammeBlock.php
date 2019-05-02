<?php
/**
 * Created by PhpStorm.
 * User: ubuntu
 * Date: 19/12/18
 * Time: 08:00
 */

/**
 * @file
 * Contains \Drupal\amp_programme\Plugin\Block\AmpProgrammeBlock.
 */

namespace Drupal\amp_programme\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * @Block(
 *   id = "arb_programme_block",
 *   admin_label = @Translation("AMP Programme Block"),
 *   category = @Translation("Custom")
 * )
 */
class AmpProgrammeBlock extends BlockBase {
  /**
   * {@inheritdoc}
   */
  public function build() {
    $programme_block_title = 'Un programme<br/>construit<br/>collectivement';
    $programme_link_title = 'Consultez le programme';
    $programme_link_url = 'programme';

    return [
      '#theme' => 'amp_programme__block',
      '#programme_block_title' => $programme_block_title,
      '#programme_link_title' => $programme_link_title
    ];
  }
}
