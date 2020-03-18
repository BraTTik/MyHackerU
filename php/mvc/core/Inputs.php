<?php

    class Inputs
    {
        public $get;
        public $post;
        public $request;

        public function __construct()
        {
            $this->get      = $_GET;
            $this->post     = $_POST;
            $this->request  = $_REQUEST;
            $this->filterInputs();
        }

        private function filterInputs(){
            unset(
                $this->get['Send'],
                $this->post['Send'],
                $this->request['Send']
            );
        }
    }