<?php
include "Expense.php";

function get_expenseList(){
    $exp = new Expense();
    $list = $exp->get_expense();
    echo $list;
  }

get_expenseList();

?>