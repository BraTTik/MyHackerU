<?php

    define("DS", DIRECTORY_SEPARATOR);
    define("CONTROLLER_PATH", __DIR__.DS.'controllers'.DS);
    define("VIEWS_PATH", __DIR__.DS.'view'.DS);

    return [
        'controllersPath'   => CONTROLLER_PATH,
        'layoutsPath'       => VIEWS_PATH.'layouts'.DS,
        'templatesPath'    => VIEWS_PATH.'templates'.DS,
        'defaultController' => 'test',
        'defaultAction'     => 'test',
        'dbconf'            => include 'dbconf.php'
    ];