let button = document.querySelector('.opened');
let div = document.querySelector('.info');
let divCopy = document.createElement('div');
let buttonCopy = document.createElement('button');
let closed = document.querySelector('.closed');
let closeCopy = document.createElement('button');
let click = document.querySelector('.all');
let input = document.querySelector('input');

closeCopy = closed;

buttonCopy = button;

divCopy = div;

input.addEventListener('focusin',()=>{
    click.classList.add('open')
})

input.addEventListener('focusout', ()=>{
    click.classList.remove('open');
})



button.addEventListener('click',(event)=>{
    divCopy.style.opacity = '1';
    divCopy.style.visibility = 'visible';
    divCopy.style.width = '300px';
    divCopy.style.display = 'inline-block';
    buttonCopy.style.opacity = '0';
    buttonCopy.style.visibility = 'hidden';
    buttonCopy.style.display = 'none';
})

closed.addEventListener('click', ()=>{
    divCopy.style.opacity = '0';
    divCopy.style.width = '0px';
    divCopy.style.visibility = 'hidden';
    divCopy.style.display = 'none'
    buttonCopy.style.opacity = '1';
    buttonCopy.style.visibility = 'visible';
    buttonCopy.style.display = 'inline-block';
})

