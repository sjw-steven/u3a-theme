<?php
/*
 listen git pull request
 */

$rawdata = file_get_contents('php://input');

if ($rawdata) {
    file_put_contents("/var/www/html/wp-content/themes/u3a/listen.log", $rawdata);

    $payload = json_decode($rawdata);

    switch (strtolower($_SERVER['HTTP_X_GITHUB_EVENT'])) {
        case 'ping':
            echo 'pong';
            exec('cd /var/www/html/wp-content/themes/u3a;git pull');
            echo "git pull done";
            break;

        case 'pull_request':
            switch ($payload->{'action'}) {
                case 'opened':
                case 'closed':
                    exec('cd /var/www/html/wp-content/themes/u3a;git pull');
                    echo "git pull done";
                    break;

            }
            break;

        default:
            echo "Other Event";
    }
} else {
    echo "Error Request";
}
?>