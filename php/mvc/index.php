<?php

    class Core
    {
        private static $app = false;
        private $path = './controllers/';
        private $controller;
        private $action;

        private function __construct(){}
        private function __clone(){}
        private function __wakeup(){}
        private function __sleep(){}

        public static function app(){
            if(self::$app === false){
                self::$app = new self();
            }

            return self::$app;
        }

        public function run()
        {
            include 'httpError.php';

            $controller = $_GET['c'];
            $action     = $_GET['a'];

            $controllerFile = $this->path.$controller.'.controller.php';

            try{

                //проверка на правильность написания контроллера и существования файла
                if(
                    !preg_match('/^[a-zA-Z0-9_]*$/', $controller) ||
                    !preg_match('/^[a-zA-Z0-9_]*$/', $action) ||
                    !file_exists($controllerFile)
                ){
                    throw new httpError('File');
                }


                include_once $controllerFile;

                $this->initController($controller, $action);

                // проверка существования метода
                if(!method_exists($this->controller, $this->action)){
                    throw new httpError('Method');
                }

            } catch(httpError $e) {
                //нет файла или метода собираем ошибку
                $controller = 'error';
                $action = 'notfound';
                $controllerFile = $this->path.$controller.'.controller.php';
                echo $e->getMessage();

                include_once $controllerFile;

                $this->initController($controller, $action);

            } catch(Exception $e) {
                echo 'Exception';
                die('Fatal Error!');
            } 
        
            $this->controller->{$this->action}();

        }

        private function initController($controller, $action)
        {
            $controllerClassName = 'controller'.ucfirst(strtolower($controller));
            $this->action = 'action'.ucfirst(strtolower($action));
            $this->controller = new $controllerClassName;
        }

    }

    Core::app()->run();

