<?php
/*
 listen git pull request
 */

$rawdata = file_get_contents('php://input');

if ($rawdata) {
    $payload = json_decode($rawdata);

    switch (strtolower($_SERVER['HTTP_X_GITHUB_EVENT'])) {
        case 'push':
            exec('/var/www/html/wp-content/themes/pull.sh');
            echo "git pull done";
            break;

        default:
            echo "Other Event " . strtolower($_SERVER['HTTP_X_GITHUB_EVENT']);
    }
} else {
    echo "Error Request";
}
?>