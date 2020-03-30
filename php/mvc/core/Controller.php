<?php

    class Controller
    {
        protected $layoutFile    = 'index.php';
        protected $templateFile  = '';

        protected function renderLayout(array $data = [])
        {
            foreach($data as $name => $value){
                $$name = $value;
            }

            ob_start();

            include Core::app()->layoutsPath.$this->layoutFile;

            return ob_get_clean();
        }

        protected function renderTemplate($templateName, $data = [])
        {
            foreach($data as $name => $value){
                $$name = $value;
            }
            $this->templateFile = Core::app()->templatesPath.$templateName.'.php';

            ob_start();

            include $this->templateFile;

            return ob_get_clean();
        }

        public function beforeAction(){}
        public function afterAction(){}
    }