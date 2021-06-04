/*
    This is the Record Listing constructor
*/

function Record(id,date,name,amount){
    this.id = id;
    this.dateId = "date-"+id;
    this.nameId = "name-"+id;
    this.amountId = "amount-"+id;
    this.removeId="remove-"+id;
    this.modifyId="modify-"+id;

    //Set the parameters as textNode
    this.dateText = document.createTextNode(date);
    this.nameText = document.createTextNode(name);
    this.amountText = document.createTextNode(amount);
    this.removeText = document.createTextNode("X");
    this.modifyText = document.createTextNode("Modify");

    //Create the cells
    this.dateCell = document.createElement("td");
    this.nameCell = document.createElement("td");
    this.amountCell = document.createElement("td");
    this.removeCell = document.createElement("td");
    this.modifyCell = document.createElement("td");

    //new Row
    this.newRow = document.createElement("tr");

    //Set The cell ids
    this.dateCell.setAttribute("id", this.dateId);
    this.nameCell.setAttribute("id", this.nameId);
    this.amountCell.setAttribute("id", this.amountId);
    this.removeCell.setAttribute("id", this.removeId);
    this.modifyCell.setAttribute("id", this.modifyId);

    //Create the buttons
    this.btnRemove = document.createElement("button");
    this.btnModify = document.createElement("button");

    //Button Attribute
    this.btnModify.setAttribute("onClick", "modify("+this.id+")");
    this.btnModify.setAttribute("type", "button");
    this.btnRemove.setAttribute("type", "submit");
    this.btnRemove.setAttribute("formaction", "Deletexpense.php");
    this.btnRemove.setAttribute("name", "index");
    this.btnRemove.setAttribute("value", this.id);
    this.btnRemove.setAttribute("formmethod", "post");

    //Append the Text to the buttons
    this.btnRemove.append(this.removeText);
    this.btnModify.append(this.modifyText);



    //Append the text Node to the cells
    this.dateCell.append(this.dateText);
    this.nameCell.append(this.nameText);
    this.amountCell.append(this.amountText);
    this.removeCell.append(this.btnRemove);
    this.modifyCell.append(this.btnModify);


    this.appendTo = function(id){
        this.parent=document.getElementById(id);
        this.parent.append(this.dateCell);
        this.parent.append(this.nameCell);
        this.parent.append(this.amountCell);
        this.parent.append(this.removeCell);
        this.parent.append(this.modifyCell);
        this.parent.append(this.newRow);






    }


}



function remove(id){
    alert("this is the remove function->" + id);

}