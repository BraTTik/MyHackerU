<?php

    class controllerTest
    {
        

        public function actionTest()
        {
           
            $query = new QueryBuilder(Core::app()->dbconf);
            
            $result = $query->select('article')
                            ->from('pages')
                            ->where('author = Ветров')
                            ->execute();

            var_dump($result);

        }

        public function actionAdd()
        {
            echo '++++';
        }
    }