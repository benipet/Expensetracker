<?php

class Record{
    private $_name;
    private $_amount;
    private $_date;

    public function __construct($name, $amount, $date)
    {
        $this->_name = $name;
        $this->_amount = $amount;
        $this->_date = $date;
    }

    function getRecord(){
        $record = array("name" => $this->_name, "amount" => $this->_amount, "date" => $this->_date);
        return $record;
    }
}

?>