<?php

    define("DS", DIRECTORY_SEPARATOR);
    define("BASE_PATH",  __DIR__.DS);
    define("CONTROLLER_PATH", __DIR__.DS.'controllers'.DS);
    define("VIEWS_PATH", BASE_PATH.'view'.DS);

    return [
        'controllersPath'   => BASE_PATH.'controllers'.DS,
        'layoutsPath'       => VIEWS_PATH.'layouts'.DS,
        'templatesPath'     => VIEWS_PATH.'templates'.DS,
        'modelsPath'        => BASE_PATH.'models'.DS,
        'defaultController' => 'test',
        'defaultAction'     => 'test',
        'dbconf'            => include 'dbconf.php'
    ];