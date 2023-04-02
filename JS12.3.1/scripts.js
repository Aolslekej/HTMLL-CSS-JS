let block = document.querySelector('.block');
let interval = setInterval(function(){
    let time = new Date().toLocaleTimeString();
    block.innerHTML = time;
    block.classList.add('time');
}, 1000)