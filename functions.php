<?php

add_action('wp_enqueue_scripts', 'enqueue_parent_styles');

function enqueue_parent_styles()
{
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
}

function theme_child_assets() {

	// Styles
	$theme_info = wp_get_theme();

	wp_enqueue_style('my-styles', get_stylesheet_directory_uri().'/assets/css/theme.css', array(), $theme_info->get('Version'));

	// Scripts
	wp_enqueue_script('theme-scripts', get_stylesheet_directory_uri().'/assets/js/theme.js', false, null, true);
}

add_action('wp_enqueue_scripts', 'theme_child_assets', 300);
