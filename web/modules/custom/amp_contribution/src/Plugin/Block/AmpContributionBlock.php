<?php
/**
 * Created by PhpStorm.
 * User: ubuntu
 * Date: 07/05/19
 * Time: 15:15
 */

/**
 * @file
 * Contains \Drupal\amp_contribution\Plugin\Block\AmpContributionBlock.
 */

namespace Drupal\amp_contribution\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * @Block(
 *   id = "amp_contribution_block",
 *   admin_label = @Translation("AMP Contribution Block"),
 *   category = @Translation("Custom")
 * )
 */
class AmpContributionBlock extends BlockBase {
  /**
   * {@inheritdoc}
   */
  public function build() {
    $contrib_link_title = 'Appel à contribution';
    $contrib_link_url = '/participer/appel-contributions';

    return [
      '#theme' => 'amp_contribution__block',
      '#contrib_link_title' => $contrib_link_title,
      '#contrib_link_url' => $contrib_link_url
    ];
  }
}
