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
    }  else {
      text = "";
    }
    document.getElementById("usernameP").innerHTML = text;
  }

  function birthdayValidation() {
    let x = document.getElementById("birthday").value;
    let text;
    if (x == "") {
      text = "Birthday Cannot Be Empty";
    } else {
      text = "";
    }
    document.getElementById("birthdayP").innerHTML = text;
  }

  var password = "";
  function passwordValidation() {
    password = document.getElementById("password").value;
    let text;
    if (password == "") {
      text = "Password Cannot Be Empty";
    } else {
      text = "";
    }
    document.getElementById("passwordP").innerHTML = text;
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
    document.getElementById("repasswordP").innerHTML = text;
  }