<?php

/**
 * Implements hook_process_region().
 */
function thinkloud_adaptive_process_region(&$vars) {
	if (in_array($vars['elements']['#region'], array('content', 'menu', 'user_first'))) {
		$theme = alpha_get_theme();

		switch ($vars['elements']['#region']) {
			case 'content':
				$vars['title_prefix'] = $theme->page['title_prefix'];
				$vars['title'] = $theme->page['title'];
				$vars['title_suffix'] = $theme->page['title_suffix'];
				$vars['tabs'] = $theme->page['tabs'];
				$vars['action_links'] = $theme->page['action_links'];
				$vars['title_hidden'] = $theme->page['title_hidden'];
				$vars['feed_icons'] = $theme->page['feed_icons'];
				break;

			case 'menu':
				$vars['main_menu'] = $theme->page['main_menu'];
				$vars['secondary_menu'] = $theme->page['secondary_menu'];
				break;

			case 'user_first':
				$vars['site_name'] = $theme->page['site_name'];
				$vars['linked_site_name'] = l($vars['site_name'], '<front>', array('attributes' => array('title' => t('Home')), 'html' => TRUE));
				$vars['site_slogan'] = $theme->page['site_slogan'];
				$vars['site_name_hidden'] = $theme->page['site_name_hidden'];
				$vars['site_slogan_hidden'] = $theme->page['site_slogan_hidden'];
				$vars['logo'] = $theme->page['logo'];
				$vars['logo_img'] = $vars['logo'] ? '<img src="' . $vars['logo'] . '" alt="' . check_plain($vars['site_name']) . '" id="logo" />' : '';
				$vars['linked_logo_img'] = $vars['logo'] ? l($vars['logo_img'], '<front>', array('attributes' => array('rel' => 'home', 'title' => check_plain($vars['site_name'])), 'html' => TRUE)) : '';
				break;
		}
	}
}

function thinkloud_adaptive_preprocess_node(&$variables) {
	if ($variables['view_mode'] == 'full' && node_is_page($variables['node'])) {
		$variables['classes_array'][] = 'node-full';
	}
	$variables['submitted'] = 'by <a href="/user/'.$variables['uid'].'">'.$variables['name'].'</a>';
}

function thinkloud_adaptive_html_head_alter(){
	drupal_add_css('http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700');
	drupal_add_css('http://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700');
	drupal_add_css('http://fonts.googleapis.com/css?family=Ubuntu+Condensed');
}

function thinkloud_adaptive_preprocess_page(&$variables){
	if (isset($variables['page']['content']['content']['content']['system_main']['#account'])) {
		$acc = $variables['page']['content']['content']['content']['system_main']['#account'];
		if (empty($acc->field_profile_style)) $acc->field_profile_style['und'][0]['tid'] = 6;
		$variables['attributes_array']['class'][] = 'profile-style-'.$acc->field_profile_style['und'][0]['tid'];
	}
//	print_r($variables); die();
}
