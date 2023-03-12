
/*let button = document.querySelector('.click');*/

const input = document.querySelector('.add');
const ul = document.querySelector('ul');
const form = document.querySelector('form');
let manage = [];
if(localStorage.manage){
    manage = JSON.parse(localStorage.manage);
}
for(let task of manage){
    let li = document.createElement('li');
    li.innerText = task;
    let ul = document.querySelector('ul');
    li.style.textDecoration = 'line-through';
    li.style.color = 'purple';
    ul.appendChild(li);
}
form.addEventListener('submit', (event) => {

    event.preventDefault();

    manage.push(input.value);
    localStorage.manage = JSON.stringify(manage);

    let li = document.createElement('li');
    li.innerText = input.value;
    let close = document.createElement('button');
    close.innerText = 'X';
    close.style.padding = '5px';
    li.append(close);


    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.prepend(checkbox);
    li.style.color = 'purple';

    
    input.value = '';

    close.addEventListener('click', () => {
        li.remove();
    })

    ul.appendChild(li);

    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            li.style.textDecoration = 'line-through';
            ul.append(li);
        } else {
            li.style.textDecoration = 'none';
            ul.prepend(li);
        }
    })
    document.body.appendChild(ul);
});



//if(localStorage.number){
 //   alert(Number(localStorage.number) + 10);
//}else{
   // localStorage.number = prompt('Введите число');
//}

/*let array1 = ['vadim','misha']
localStorage.task = JSON.stringify(array1);
let a =JSON.parse(localStorage.task);
console.log(a);
let task = [];*/




//JSON.stringify({name: 'Misha'});

//JSON.parse({name: 'Misha'});

let array = [1, 2, 3];
let string = JSON.stringify(array);
let parse = JSON.parse(string);
console.log(parse);

 