$("#formValidationButton").click(function formValidation(){
    nameValidation();
});

function nameValidation() {
    let x = document.getElementById("username").value;
    let text;
    if (x == "") {
      text = "Name Cannot Be Empty";
    } else {
      text = "Input OK";
    }
    document.getElementById("usernameP").innerHTML = text;
  }