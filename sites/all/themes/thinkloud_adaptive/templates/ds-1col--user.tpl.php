<?php $account = user_load(arg(1));
if(!empty($account->picture)){
	$pic = theme_image_style(array(
			'style_name' => 'prodile_big_avatar',
			'path' => $account->picture->uri)
	);
} else{
	$pic = '<img src="'.$GLOBALS['base_path'].drupal_get_path('theme','thinkloud_adaptive').'/images/default-user-150.png">';
}?>

<?php echo $pic?>