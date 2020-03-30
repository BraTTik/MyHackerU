<?php

    class controllerTest extends Controller
    {
        

        public function actionTest()
        {
            $menu = $this->renderTemplate('menu');
            $articles[] = $this->renderTemplate('article');
            $articles[] = $this->renderTemplate('article', ['aHeader' => 'Test Header', 'aBody' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sit consequatur assumenda ex porro vel consectetur sunt repellat esse sapiente, dolor nemo! Quibusdam voluptates aperiam dolores, omnis iusto consequuntur pariatur?']);
            
            $articleContainer = $this->renderTemplate('articleContainer', ['articles' => $articles]);

            echo $this->renderLayout(['menu' => $menu, 'articleContainer' => $articleContainer]);


            foreach(Core::app()->dbconf as $name => $value){
                $$name = $value;
            }

            $query = new QueryBuilder($host, $user, $password, $database);

            $res = $query->select('id', 'param1', 'param2')
                        ->where(['id < 5', 'param1 = 4'])
                        ->from('table1')
                        ->join('table2', 'id', 'id')
                        ->groupBy('id')
                        ->execute();
            var_dump($res);

        }

        public function actionAdd()
        {
            echo '++++';
        }

    }