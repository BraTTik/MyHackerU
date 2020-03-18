<?php

    include './core/Core.php';
    $config =  include './config.php';
    
    Core::app()->run($config);

