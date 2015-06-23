<?php

// Create 1 Custom Post type for a Demo, called HTML5-Blank
function create_sample_post_type()
{
    register_taxonomy_for_object_type('category', 'html5-blank'); // Register Taxonomies for Category
    register_taxonomy_for_object_type('post_tag', 'html5-blank');
    register_post_type('sample', // Register Custom Post Type
        array(
        'labels' => array(
            'name' => __('Sample Post Type', 'html5blank'), // Rename these to suit
            'singular_name' => __('Sample Post Type', 'html5blank'),
            'add_new' => __('Add New', 'html5blank'),
            'add_new_item' => __('Add New Sample Post Type', 'html5blank'),
            'edit' => __('Edit', 'html5blank'),
            'edit_item' => __('Edit Sample Post Type', 'html5blank'),
            'new_item' => __('New Sample Post Type', 'html5blank'),
            'view' => __('View Sample Post Types', 'html5blank'),
            'view_item' => __('View Sample Post Type', 'html5blank'),
            'search_items' => __('Search Sample Post Types', 'html5blank'),
            'not_found' => __('No Sample Post Types found', 'html5blank'),
            'not_found_in_trash' => __('No Sample Post Types found in Trash', 'html5blank')
        ),
        'public' => true,
        'hierarchical' => true, // Allows your posts to behave like Hierarchy Pages
        'has_archive' => true,
        'supports' => array(
            'title',
            'editor',
            'excerpt',
            'thumbnail'
        ), // Go to Dashboard Custom HTML5 Blank post for supports
        'can_export' => true, // Allows export in Tools > Export
        'taxonomies' => array(
            'post_tag',
            'category'
        ) // Add Category and Post Tags support
    ));
}

?>