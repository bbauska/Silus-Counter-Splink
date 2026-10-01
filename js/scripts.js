/* /js/scripts.js in github Silus-Counter-Splink making silus-counter-splink.bauska.org */
let counter = 5000;
/* 5,000 Sep 18, 2026 Friday night 

  all times are approximate. */

function count() {
  counter++;
  givenNumber = counter;
  output = givenNumber.toLocaleString('en-US'); 
  document.getElementById('number').innerHTML = output;
}

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('clicker').onclick = count;
})
