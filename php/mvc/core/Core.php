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

        public function __get($key)
        {
            return $this->config[$key];
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
                throw new httpError("Action -> ($action) doesn't exists", 404);
            }

            
            $this->action = $action;
        }

        public function run($config)
        {
            $this->config = $config;
            $controller = $this->inputs->get['c'] ?? core::app()->defaultController ?? '';
            $action     = $this->inputs->get['a'] ?? core::app()->defaultAction ?? '';

            try{
                $this->runController($controller, $action);
            }catch(httpError $e){
                header('HTTP/1.1 '.$e->getCode().' '.$e->getMessage());
                $this->runController('error', 'notfound');
            }catch(Exception $e){
                echo $e->getMessage();
            }

            $this->controller->beforeAction();
            $this->controller->{$this->action}();
            $this->controller->afterAction();
        }

    }