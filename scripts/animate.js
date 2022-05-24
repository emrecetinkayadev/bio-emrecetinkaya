var myLink = document.getElementById('mylink');
var divRes = document.getElementById('divRes');

myLink.addEventListener('click', function(){
  console.log(divRes)
    divRes.animate({height: '300px', opacity: '0.4'}, "slow");
    divRes.animate({width: '300px', opacity: '0.8'}, "slow");
    divRes.animate({height: '100px', opacity: '0.4'}, "slow");
    divRes.animate({width: '100px', opacity: '0.8'}, "slow");
  });

  const _ = require('lodash');
  const mottos = [
    {id: 1, name: 'Wow Such Good Much Respect'},
    {id: 2, name: 'Damn Son Where Did You Find This'}
  ] 