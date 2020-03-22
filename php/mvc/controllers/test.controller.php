<?php

    class controllerTest
    {
        

        public function actionTest()
        {
           
            $query = new QueryBuilder(Core::app()->dbconf);
            
            $res = $query ->delete('pages')
                        ->where(['id' => '7'])
                    ->execute();
            echo '<pre>';
            var_dump($res);



        }

        public function actionAdd()
        {
            echo '++++';
        }
    }