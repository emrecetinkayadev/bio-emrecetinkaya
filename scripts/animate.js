var myLink = document.getElementById('mylink');
var divRes = document.getElementById('divRes');

myLink.onclick(function(){
    divRes.animate({height: '300px', opacity: '0.4'}, "slow");
    divRes.animate({width: '300px', opacity: '0.8'}, "slow");
    divRes.animate({height: '100px', opacity: '0.4'}, "slow");
    divRes.animate({width: '100px', opacity: '0.8'}, "slow");
    alert("Damn Son Where Did You Find This?")
  });