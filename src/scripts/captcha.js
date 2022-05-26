var allValue = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

var cVal1 = allValue[Math.floor(Math.random() * allValue.length)];
var cVal2 = allValue[Math.floor(Math.random() * allValue.length)];
var cVal3 = allValue[Math.floor(Math.random() * allValue.length)];
var cVal4 = allValue[Math.floor(Math.random() * allValue.length)];
var cVal5 = allValue[Math.floor(Math.random() * allValue.length)];
var cVal6 = allValue[Math.floor(Math.random() * allValue.length)];

var cValue = cVal1 + cVal2 + cVal3 + cVal4 + cVal5 + cVal6;

document.getElementById("captchaValue").innerHTML = cValue;

thisValue = "";
inputCaptcha.addEventListener('charge', function(){
    thisValue = inputCaptcha.value;
})

$("#formValidationButton").click(function formValidation(){
    if (cValue == thisValue){
        alert('valid')
        document.logForm.submit();
    }else if(inputCaptcha.value == ""){
        alert('invalid Captcha')
    }else{
        alert('invalid Captcha')
    }
});