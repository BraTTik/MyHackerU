<?php

    define("DS", DIRECTORY_SEPARATOR);
    define("CONTROLLER_PATH", __DIR__.DS.'controllers/');

    return [
        'controllersPath'   => CONTROLLER_PATH,
        'defaultController' => 'test',
        'defaultAction'     => 'test'
    ];