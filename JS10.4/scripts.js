
/*let button = document.querySelector('.click');*/

const input = document.querySelector('.add');
const ul = document.querySelector('ul');
const form = document.querySelector('form');


form.addEventListener('submit', (event)=>{

    event.preventDefault();
    
    let li = document.createElement('li');
    li.innerText = input.value;
    let close = document.createElement('button');
    close.innerText = 'X';
    close.style.padding = '5px';
    li.append(close);

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.prepend(checkbox);
    li.style.color = 'purple'

    input.value = '';

    close.addEventListener('click', ()=>{
        li.remove();
    })

    ul.appendChild(li);

    checkbox.addEventListener('click', ()=>{
        if(checkbox.checked){
            li.style.textDecoration = 'line-through';
            ul.append(li);
        }else{
            li.style.textDecoration = 'none';
            ul.prepend(li);
        }
    })
    document.body.appendChild(ul);
})