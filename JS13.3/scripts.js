let httpRequest = new XMLHttpRequest();
let ul = document.querySelector('ul');

httpRequest.onload = function () {
    let parse = JSON.parse(httpRequest.responseText);
    for (let i = 0; i < 20; i++) {
        let li = document.createElement('li');
        li.innerText = parse[i].title;
        ul.appendChild(li)
    }
}

httpRequest.open('GET', "https://jsonplaceholder.typicode.com/todos ");
httpRequest.send();