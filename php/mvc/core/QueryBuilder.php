<?php

    class QueryBuilder
    {

        private $sentences = [];
        private $db;

        private $select = [];
        private $update = [];
        private $delete = [];
        private $from = [];
        private $where = [];
        private $insert = [];

        public function __construct($dbconfig)
        {
            $this->db = new MsqlDB($dbconfig);
        }

        public function select()
        {
            if(empty(func_get_args())){
                $fields = ['*'];
            }elseif(is_array((func_get_args())[0])){
                $fields = (func_get_args())[0];
            }else{
                $fields = func_get_args();
            }

            $this->select[] = $fields;

            return $this;
        }
        
        private function buildSelect()
        {

            $fields = $this->select[0];
            $fields = implode(', ', $fields);
            $fields = $this->db->escape($fields);
    
           $this->sentences[] = 'SELECT ' . $fields;
           
           return 'SELECT ' . $fields;
            
        }

        public function from(string $table)
        {   
            $this->from[] = $table;

            return $this;
        }
        
        private function buildFrom()
        {
            $from = $this->from[0];

            $from = $this->db->escape($from);
            $this->sentences[] = 'FROM ' . $from;

            return 'FROM ' . $from;
        }

        public function update(string $table, array $assoc)
        {
            $this->update[] = $table;
            $this->update[] = $assoc;
            
            return $this;
        }
        
        private function buildUpdate()
        {
            $table = $this->db->escape($this->update[0]);
            $fields = $this->getFieldsFromAssoc($this->update[1]);
    
            $fields = implode(', ', $fields);
    
            $this->sentences[] = 'UPDATE '.$table;
            $this->sentences[] = 'SET '.$fields;

            return 'UPDATE '.$table.' SET '.$fields;
        }

        public function where($fields, bool $AND = true)
        {
            $this->where['fields'] = $fields;
            $this->where['AND'] = $AND;
            return $this;
        }
        
        private function buildWhere()
        {
            if(is_array($this->where['fields'])){
                $rawFields = $this->where['fields'];
                foreach($rawFields as $value){
                    $fields[] = $this->db->escape($value);
                }
                if($this->where['AND'])
                {
                    $fields = implode(' AND ', $fields);
                }else{
                    $fields = implode(' OR ', $fields);
                }
            }else{
                $fields = $this->db->escape($this->where['fields']);
            }
            $this->sentences[] = 'WHERE ' . $fields;

            return 'WHERE ' . $fields;
        }

        public function insert(string $table, array $assoc)
        {
            $this->insert['table'] = $table;
            $this->insert['fields'] = $assoc;
            
            return $this;
        }
        
        private function buildInsert()
        {
            $table = $this->insert['table'];
            $assoc = $this->insert['fields'];

            foreach($assoc as $key => $value){
                $keys[] = $this->db->escape($key);
                $values[] ="'".$this->db->escape($value)."'";
            }
    
            $keys = implode(', ', $keys);
            $values = implode(', ', $values);
    
            $this->sentences[] = "INSERT INTO $table ($keys)";
            $this->sentences[] = "VALUES ($values)";

            return "INSERT INTO $table ($keys) VALUES ($values)";
        }
        
        public function delete(string $table, bool $I_KNOW_WHAT_I_DOING = false)
        {
            $this->delete['table'] = $table;
            $this->delete['I_KNOW_WHAT_I_DOING'] = $I_KNOW_WHAT_I_DOING;
            return $this;
        }
        
        private function buildDelete()
        {
            $table = $this->delete['table'];
            $table = $this->db->escape($table);
            $this->sentences[] = 'DELETE FROM '.$table;

            return 'DELETE FROM '.$table;
        }

        public function getText()
        {
            $query = '';
            if($this->insert){
                $query .= ' '.$this->buildInsert().' ';
            }
            if($this->update){
                $query .= ' '.$this->buildUpdate().' ';
            }
            if($this->delete && ($this->delete['I_KNOW_WHAT_I_DOING'] || $this->where)){
                $query .= ' '.$this->buildDelete().' ';
            }elseif($this->delete){
                echo 'You\'re going to clean all table if you meant that put TRUE as second parameter in delete()';
            }
            if($this->select){
                $query .= ' '.$this->buildSelect().' ';
            }
            if($this->from){
                $query .= ' '.$this->buildFrom().' ';
            }
            if($this->where){
                $query .= ' '.$this->buildWhere().' ';
            }

            return $query;
        }

        
        public function execute()
        {  
            $sql = $this->getText();
            
            $result = $this->db->query($sql);

            $out = [];
            if($result === false){
                echo 'Fail: '.$sql;
            }else{
                $out = $this->db->fetchAssoc($result);
            }
            $this->cleanStatements();

            return $out;
        }

        private function getFieldsFromAssoc(array $assoc)
        {
            $fields = [];
            foreach($assoc as $key => $value){
                $key = $this->db->escape($key);
                $value = "'".$this->db->escape($value)."'";
                $fields[] = "$key = $value";
            }

            return $fields;
        }

        private function cleanStatements()
        {
            $this->select    = [];
            $this->update    = [];
            $this->delete    = [];
            $this->from      = [];
            $this->insert    = [];
        }
    }