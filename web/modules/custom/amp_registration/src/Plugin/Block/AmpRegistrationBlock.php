<?php
/**
 * Created by PhpStorm.
 * User: ubuntu
 * Date: 07/05/19
 * Time: 15:15
 */

/**
 * @file
 * Contains \Drupal\amp_registration\Plugin\Block\AmpRegistrationBlock.
 */

namespace Drupal\amp_registration\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * @Block(
 *   id = "amp_registration_block",
 *   admin_label = @Translation("AMP Registration Block"),
 *   category = @Translation("Custom")
 * )
 */
class AmpRegistrationBlock extends BlockBase {
  /**
   * {@inheritdoc}
   */
  public function build() {
    $registration_link_title = 'S\'inscrire au colloque';
    $registration_link_url = '/participer/inscription';

    return [
      '#theme' => 'amp_registration__block',
      '#registration_link_title' => $registration_link_title,
      '#registration_link_url' => $registration_link_url
    ];
  }
}
