<?php

include "Expense.php";

modify_expense($_POST['modify'],$_POST['date'],$_POST['name'],$_POST['amount']);

function modify_expense($index, $date, $name, $amount){
    $modRecord = new Expense();
    $modRecord->modify_expense($index, $date, $name, $amount);
    $modRecord->save();

}
header("Location: http://localhost");
?>