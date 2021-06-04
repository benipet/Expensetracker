function getList(){
    var response=1;
    var rec = Array();

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){

                response = JSON.parse(this.responseText);


            }

    var i=0;
    while(i<response.length){
    rec[i] = new Record(i, response[i]["date"], response[i]["name"], response[i]["amount"]);
    rec[i].appendTo("expenseList");

    i++;
    }
    }

    xhttp.open("POST", "Listexpense.php", true);
    xhttp.send();


  }