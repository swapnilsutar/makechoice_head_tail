
const btn = document.querySelector('#btn');
const coin = document.querySelector('.coin');

btn.addEventListener("click",function(){

    const rand = Math.random()

    if(rand < 0.5){
        coin.setAttribute("class","coin anim-heads");
    }
    else{
        coin.setAttribute("class","coin anim-tails");
    }
    
});

// btn.addEventListener('click', function(){
//     coin.classList.add('coin anim-heads');
//     setTimeout(() => {
//         coin.classList.remove("coin anim-heads");
//     },500)
// });