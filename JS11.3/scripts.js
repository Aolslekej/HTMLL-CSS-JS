let div = document.querySelector('div');
let body = document.querySelector('body');

let array = document.querySelectorAll('img');

if(localStorage.url){
    body.style.backgroundImage = `url(${localStorage.url})`;
}else{
    body.style.backgroundImage = `url(${array[0].getAttribute('src')})`
}

window.addEventListener('click', (event) => {
    for (let item of array) {
        if (event.target === item) {
            let url = item.getAttribute('src');
            item.classList.add('active');
            body.style.backgroundImage = `url(${url})`;
            localStorage.url = url;
        }else{
            item.classList.remove('active');
        }
    }
})