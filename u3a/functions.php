<?php
/* Function to enqueue stylesheet from parent theme */

function child_themes_styles() {
    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array(), wp_get_theme()->get('Version'));

}

add_action( 'wp_enqueue_scripts', 'child_themes_styles' );