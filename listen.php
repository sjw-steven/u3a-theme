<?php
/*
 listen git pull request
 */

$rawdata = file_get_contents('php://input');

if ($rawdata) {
    $payload = json_decode($rawdata);

    switch (strtolower($_SERVER['HTTP_X_GITHUB_EVENT'])) {
        case 'ping':
            echo 'pong';
            exec('cd /var/www/html/wp-content/themes/u3a;git pull');
            echo "git pull done";
            break;

        case 'push':
            switch ($payload->{'action'}) {
                case 'opened':
                case 'closed':
                    exec('cd /var/www/html/wp-content/themes/u3a;git pull');
                    echo "git pull done";
                    break;

            }
            break;

        default:
            echo "Other Event " . strtolower($_SERVER['HTTP_X_GITHUB_EVENT']);
    }
} else {
    echo "Error Request";
}
?>