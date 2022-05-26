var allValue = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

var cVal1 = allValue[Math.floor(Math.random() * allValue.length)];
var cVal2 = allValue[Math.floor(Math.random() * allValue.length)];
var cVal3 = allValue[Math.floor(Math.random() * allValue.length)];
var cVal4 = allValue[Math.floor(Math.random() * allValue.length)];
var cVal5 = allValue[Math.floor(Math.random() * allValue.length)];
var cVal6 = allValue[Math.floor(Math.random() * allValue.length)];

var cValue = cVal1 + cVal2 + cVal3 + cVal4 + cVal5 + cVal6;

document.getElementById("captchaValue").innerHTML = cValue;

/* var inputCaptcha = document.getElementById("inputCaptcha").value;
var thisValue = "";
inputCaptcha.addEventListener('charge', function(){
    thisValue = inputCaptcha.value;
}) */

var text = "";
$("#formValidationButton").click(function formValidation(){
    let thisValue = document.getElementById("inputCaptcha").value;
    if (cValue == thisValue){
        text = "";
    }else if(inputCaptcha.value == ""){
        text = 'invalid Captcha';
    }else{
        text = 'invalid Captcha';
    }
    document.getElementById("captchaP").innerHTML = text;
});