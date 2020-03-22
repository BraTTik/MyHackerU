<?php

    class QueryBuilder
    {

        private $sentences = [];
        private $db;

        public function __construct($dbconfig)
        {
            $this->db = new MsqlDB($dbconfig);
        }

        public function select()
        {
            $fields = '*';
            if(!empty(func_get_args())) {
                $fields = func_get_args();
                $fields = implode(', ', $fields);
            }
           $fields = $this->db->escape($fields);

           $this->sentences[] = 'SELECT ' . $fields;
           
           return $this;
        }

        public function from(string $from)
        {
            $from = $this->db->escape($from);
            $this->sentences[] = 'FROM ' . $from;

            return $this;
        }

        public function update(string $table, array $values)
        {
            $fields = $this->getFieldsFromAssoc($values);

            $fields = implode(', ', $fields);

            $this->sentences[] = 'UPDATE '.$table;
            $this->sentences[] = 'SET '.$fields;

            return $this;
        }

        public function where(array $assoc)
        {
            $fields = $this->getFieldsFromAssoc($assoc);

            $fields = implode(', ', $fields);
            $this->sentences[] = 'WHERE ' . $fields;

            return $this;
        }

        public function insert(string $table, array $assoc)
        {
            foreach($assoc as $key => $value){
                $keys[] = $this->db->escape($key);
                $values[] ="'".$this->db->escape($value)."'";
            }

            $keys = implode(', ', $keys);
            $values = implode(', ', $values);

            $this->sentences[] = "INSERT INTO $table ($keys)";
            $this->sentences[] = "VALUES ($values)";

            return $this;
        }

        public function delete(string $table)
        {
            $table = $this->db->escape($table);
            $this->sentences[] = 'DELETE FROM '.$table;
            return $this;
        }

        public function getText()
        {
            return implode(' ', $this->sentences);
        }

        
        public function execute()
        {
            $sql = $this->getText();
            var_dump($sql.'<br>');
            $this->sentences = [];

            $result = $this->db->query($sql);

            if(is_bool($result))
            {
                return $result;
            }

            return $this->db->fetchAssoc($result);
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
    }