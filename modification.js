/*
    This constructor function create a form, to modify the desired expense record
*/

function modiForm(id){
    this.id=id.toString();
    this.btnText = document.createTextNode("Approve");
    this.formElement = document.createElement("form");
    this.formElement.setAttribute("method", "post");
    this.formElement.setAttribute("id", "modiForm");


    this.SetActionFile = function (filename){
        this.formElement.setAttribute("method", "post");
        this.formElement.setAttribute("action", filename);
    }

    //Input Date
    this.inputDate = document.createElement("input");
    this.inputDate.setAttribute("type", "text");
    this.inputDate.setAttribute("name", "date");
    this.inputDate.setAttribute("form", "modiForm");

    //Input Name
    this.inputName = document.createElement("input");
    this.inputName.setAttribute("type", "text");
    this.inputName.setAttribute("name", "name");
    this.inputName.setAttribute("form", "modiForm");

    //Input Amount
    this.inputAmount = document.createElement("input");
    this.inputAmount.setAttribute("type", "text");
    this.inputAmount.setAttribute("name", "amount");
    this.inputAmount.setAttribute("form", "modiForm");

    //Submit button
    this.send = document.createElement("button");
    this.send.setAttribute("type", "submit");
    this.send.setAttribute("name", "modify");
    this.send.setAttribute("value", id);
    this.send.setAttribute("form", "modiForm");
    this.send.append(this.btnText);


    //Append elements to the Form
    this.formElement.append(this.inputDate);
    this.formElement.append(this.inputName);
    this.formElement.append(this.inputAmount);
    this.formElement.append(this.send);

    //Append Form to

    this.appendFormTo = function(parentId){
        document.getElementById(parentId).append(this.formElement);
    }

    //Append Input Elements custom
    this.appendInputs = function(idDate, idName, idAmount, idSendButton){
        document.getElementById(idDate).append(this.inputDate);
        document.getElementById(idName).append(this.inputName);
        document.getElementById(idAmount).append(this.inputAmount);
        document.getElementById(idSendButton).append(this.send);
    }

}