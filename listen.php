<?php

$rawdata = file_get_contents('php://input');

if ($rawdata) {
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
            header('HTTP/1.0 404 Not Found');
            die();
    }
} else {
    echo "Error Request";
}
?>