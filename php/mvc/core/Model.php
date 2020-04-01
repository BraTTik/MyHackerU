<?php

    abstract class Model
    {
        protected static $db = false;
        protected $tableSchema;
        protected $tableName;

        public function __construct()
        {
            if(self::$db === false){
                foreach(Core::app()->dbconf as $key => $value){
                    $$key = $value;
                }
                self::$db = new QueryBuilder($host, $user, $password, $database);
            }
            $this->tableName = get_class($this);
            $this->tableSchema = $this->getTableSchema();
            
        }

        public function __set($name, $value)
        {
            if(isset($this->tableSchema[$name])){
                $this->tableSchema[$name]['value'] = $value;
            }else{
                $this->$name = $value;
            }
        }

        protected function getTableSchema()
        {
            //SELECT COLUMN_NAME, DATA_TYPE FROM information_schema.COLUMNS where table_name = 'users';
            $tableName = $this->tableName;
            var_dump($tableName);
            $result = self::$db->select('COLUMN_NAME', 'DATA_TYPE')
                                ->from('information_schema.columns')
                                ->where("table_name = $tableName")
                                ->execute();
            $tableSchema = [];
            foreach($result as $column){
                $columnName = $column['COLUMN_NAME'];
                unset($column['COLUMN_NAME']);
                $tableSchema[$columnName] = $column;
            }

            return $tableSchema;
        }

        public function save()
        {
            return isset($this->tableSchema['id']['value']) ? $this->update() : $this->insert();
        }

        protected function update(){
            $saveData = $this->getSaveData();
            $id = $saveData['id'];
            unset($saveData['id']);
            return self::$db->update($this->tableName, $saveData)->where("id = $id")->execute();
        }

        protected function insert(){

            $saveData = $this->getSaveData();
            return self::$db->insert($this->tableName, $saveData)->execute();
        }

        protected function getSaveData()
        {
            $saveData = [];
            foreach($this->tableSchema as $name => $params){
                if(isset($params['value'])){
                    $saveData[$name] = $params['value'];
                }
            }

            return $saveData;
        }
    }