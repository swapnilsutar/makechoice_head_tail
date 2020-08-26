
const btn = document.querySelector('#btn');
const coin = document.querySelector('.coin');




function deferFn(callback, ms) {
    setTimeout(callback, ms); 
  }
  

function flipme(){

    coin.setAttribute('class','')
    const rand = Math.random()

    const result = rand<0.5?"heads":"tails";

    // if(t==result){
      // document.getElementById("done").style.transitionDelay = "5s";
      
    // alert(document.getElementById("done").innerHTML=result);

    
    deferFn(function() {
        coin.setAttribute('class', 'coin anim-' + result);
        deferFn(processResult.bind(null, result), 2900);
      },1);


}

btn.addEventListener("click",flipme);