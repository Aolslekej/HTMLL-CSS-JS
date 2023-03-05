let closed = document.querySelector('.closed');

let opened = document.querySelector('.opened');

let div = document.querySelector('.pannel');

let div1 = document.createElement('div');

let main = document.querySelector('.information');

let main1 = document.createElement('main');

let opened1 = document.createElement('button');

opened1 = opened;

main1 = main;

div1 = div;

opened.addEventListener('click',()=>{
    div1.style.width = '250px';
    main1.style.marginLeft = '258px';
    opened1.style.visibility ='hidden';
    opened1.style.opacity = '0';
})

closed.addEventListener('click', ()=>{
    div1.style.width = '0px';
    opened1.style.opacity = '1';
    opened1.style.visibility = 'visible';
    main1.style.marginLeft = '0px'
})

