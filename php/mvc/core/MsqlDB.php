<?php 

    class MsqlDB
    {
        private $connection;

        public function __construct($conf)
        {
           $this->connection = mysqli_connect(
               $conf['host'], 
               $conf['user'], 
               $conf['password'], 
               $conf['database']
            );
        }

        public function query($sql)
        {
            return mysqli_query($this->connection, $sql);
        }

        public function select(string $fields = '*', string $from = 'film')
        {
            $fields = $this->escape($fields);
            $from = $this->escape($from);
            $sql = "SELECT $fields FROM $from";

            $result = $this->query($sql);

            var_dump($sql);

            return $this->fetchAssoc($result);
        }

        public function escape($sql)
        {
            return mysqli_escape_string($this->connection, $sql);
        }

        public function fetchAssoc($result)
        {
            $out = [];
            if($result){
                while($row = mysqli_fetch_assoc($result)){
                    $out[] = $row;
                }
            } else {
                $out = 'По вашему запросу ничего не найдено';
            }

            return $out;
        }
    }