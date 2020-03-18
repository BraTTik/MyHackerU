<?php

    spl_autoload_register(function($name){
        include $name.'.php';
    });

    class Core
    {
        private static $instance = false;

        private $controller;
        private $action;
        private $config;
        private $inputs;

        private function __construct(){
            $this->inputs = new Inputs;
        }
        private function __clone(){}
        private function __sleep(){}
        private function __wakeup(){}

        public static function app()
        {
            if(self::$instance === false){
                self::$instance = new self();
            }

            return self::$instance;
        }

        public function run($config)
        {
            $this->config = $config;
            $controller = $this->inputs->get['c'] ?? $config['defaultController'] ?? '';
            $action     = $this->inputs->get['a'] ?? $config['defaultAction'] ?? '';

            try{
                $this->runController($controller, $action);
            }catch(httpError $e){
                header("HTTP/1.1 404 Not Found");
                echo $e->getMessage();
                $this->runController('error', 'notfound');
            }catch(Exception $e){
                echo $e->getMessage();
            }

            $this->controller->{$this->action}();
        }
        
        private function runController($controller, $action)
        {

            if(
                !preg_match('#^[a-zA-Z0-9_]{1,50}$#', $controller) ||
                !preg_match('#^[a-zA-Z0-9_]{1,50}$#', $action)
            ){
                throw new httpError("Controller -> ($controller) or action -> ($action) names are not valid", 404);
            }
            $controllerName = 'controller'.ucfirst(strtolower($controller));
            $action = 'action'.ucfirst(strtolower($action));
            $controllerFile = $this->config['controllersPath'].strtolower($controller).'.controller.php';
            
            if(!file_exists($controllerFile)){
                throw new httpError("File not found -> $controllerFile", 404);
            }

            include $controllerFile;

            $this->controller = new $controllerName;

            if(!method_exists($this->controller, $action)){
                throw new httpError("Action -> ($action) doesn't exists");
            }

            $this->action = $action;

        }
    }