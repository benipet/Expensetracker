<?php

include "Expense.php";


add_expense($_POST['name'],$_POST['amount'], $_POST['date']);

function add_expense($name, $amount, $date){
    $exp = new Expense();
    $exp->add_expense($name, $amount, $date);
    $exp->save();

}

header("Location: http://localhost");
?>
