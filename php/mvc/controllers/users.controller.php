<?php

    class ControllerUsers extends Controller
    {
        public function actionLogin(){
            echo 'Login';
            $model = $this->getModel('users');
            $model->id = 1;
            $model->email = 'bbb@mmm.com';
            $model->password = md5('1234');
            $model->salt     = md5('zzz');
            $result = $model->save();

            var_dump($result);
        }

        
    }