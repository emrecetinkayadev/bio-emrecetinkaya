const _ = require('lodash');
const mottos = [
  {id: 1, name: 'Wow Such Good Much Respect'},
  {id: 2, name: 'Damn Son Where Did You Find This'}
] 

$("#button2").click(function(){
    console.log("Emre2")
    $(function(){
        let randomNum = Math.floor(Math.random() * mottos.length) + 1;
        console.log(randomNum);
        alert(_.indexOf(mottos, { id: randomNum }));
    })
});