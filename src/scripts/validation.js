$("#formValidationButton").click(function formValidation(){
    nameValidation();
    birthdayValidation();
    passwordValidation();
    repasswordValidation();
});

function nameValidation() {
    let x = document.getElementById("username").value;
    let text;
     var usernameRegex = /^[a-zA-Z0-9]+$/;
    var testVal = usernameRegex.test(x); 
    if (x == "") {
      text = "Name Cannot Be Empty";
    } else if(!testVal){
      text = "Not a Valid Username";
    } else if(x.length < 6 || x.length > 20){
      text = "Username Length is not valid";
    }  else {
      text = "";
    }
    if (text != null){
      document.getElementById("usernameP").innerHTML = text;
    }
  }

  function birthdayValidation() {
    let x = document.getElementById("birthday").value;
    let text;
    if (x == "") {
      text = "Birthday Cannot Be Empty";
    } else {
      text = "";
    }
    if (text != null){
      document.getElementById("birthdayP").innerHTML = text;
    }
  }

  var password = "";
  function passwordValidation() {
    password = document.getElementById("password").value;
    let text;
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if (password == "") {
      text = "Password Cannot Be Empty";
    } else if(password.length < 10 || password.length > 20){
      text = "Password Length is not valid";
    }else if(!strongRegex.test(password)) {
      text = "Password is not Strong";
    } else {
      text = "";
    }
    if (text != null){
      document.getElementById("passwordP").innerHTML = text;
    }
  }

  function repasswordValidation() {
    let x = document.getElementById("repassword").value;
    let text;
    if (x == "") {
      text = "Password not Match";
    } else if(password == x) {
      text = "";
    } else {
      test = "Password not Match"
    }
    if (text != null){
      document.getElementById("repasswordP").innerHTML = text;
    }
  }