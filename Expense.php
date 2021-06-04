<?php
include "expenseRecords.php";

class Expense{
    private $_ExpenseRecords;
    private $_filename;
    private $_filePointer;
    private $_JSONexpense;


    public function __construct(){
        $this->_filename = "expfile.json";
        $this->_ExpenseRecords = Array();
        $this->openExpenseFile();
        if (filesize($this->_filename)>0)
        $this->read_expenseFile();



    }

    public function get_expense(){
        return $this->_JSONexpense;

    }

    public function modify_expense($index, $date, $name, $amount){
        $this->_ExpenseRecords[$index]['date'] = $date;
        $this->_ExpenseRecords[$index]['name'] = $name;
        $this->_ExpenseRecords[$index]['amount'] = $amount;
        $this->StoreArray_toJSON();

    }

    public function del_expense($index){
        echo "<br><br>";
        array_splice($this->_ExpenseRecords, $index,1);
        $this->StoreArray_toJSON();

    }

    public function add_expense($name, $amount, $date){
          $this->AddArrayElement($name, $amount, $date);
          $this->StoreArray_toJSON();

    }

    public function get_fileName(){
        return $this->_filename;
    }

    public function save(){
        if (filesize($this->_filename)==0){
        $this->openExpenseFile();
        }
        $this->save_toFile();

    }

    private function save_toFile(){
        $this->openExpenseFile("replace");
        fwrite($this->_filePointer, $this->_JSONexpense);
        fclose($this->_filePointer);
    }

    private function openExpenseFile($mode=NULL){

    switch($mode){
    case "append":
     $this->_filePointer=fopen($this->_filename, "a+");
     break;

    case "read":
    $this->_filePointer=fopen($this->_filename, "r");
    break;

    case "replace":
    $this->_filePointer=fopen($this->_filename, "w");
    break;

    default:
     if(!is_file($this->_filename)){
        $this->_filePointer=fopen($this->_filename, "w");
        fclose($this->_filePointer);
        }
     break;
    }
    }

    private function StoreArray_toJSON(){
        $this->_JSONexpense = json_encode($this->_ExpenseRecords);

    }

    private function read_expenseFile(){
        $this->_JSONexpense = NULL;
        $this->openExpenseFile("read");
        $size = filesize($this->_filename);
        $this->_JSONexpense=fread($this->_filePointer, $size);

        $this->_ExpenseRecords=json_decode($this->_JSONexpense, true);

    }


    private function AddArrayElement($name, $amount, $date){
        $rec = new Record($name, $amount, $date);
        array_push($this->_ExpenseRecords, $rec->getRecord());
        //var_dump($this->_ExpenseRecords);
    }

}



?>