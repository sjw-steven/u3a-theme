<?php
/* Function to enqueue stylesheet from parent theme */

function child_themes_styles() {
    wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/style.css', array(), wp_get_theme()->get('Version'));

}

function child_themes_js() {
    wp_enqueue_script(
        'custom-script',
        get_stylesheet_directory_uri() . '/u3a.js',
        array(),
        wp_get_theme()->get("Version")
    );
}

add_action('wp_enqueue_scripts', 'child_themes_js');
add_action('wp_enqueue_scripts', 'child_themes_styles');