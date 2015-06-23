<?php 
	
	include(get_template_directory() . '/inc/post-types/sample-post-type.php');
	
	add_action('init', 'create_sample_post_type');

?>