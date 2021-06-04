<?php
include "Expense.php";

delete_expense($_POST["index"]);

function delete_expense($index){
    $recExpense = new Expense();
    $recExpense->del_expense($index);
    $recExpense->Save();

}

header("Location: http://localhost");

?>