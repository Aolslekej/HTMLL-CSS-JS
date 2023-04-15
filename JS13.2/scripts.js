let httpRequest = new XMLHttpRequest();
let div = document.querySelector('div');

httpRequest.onload = function () {
    let parse = JSON.parse(httpRequest.responseText);
    let title = parse.title;
    div.innerHTML = title;
}

httpRequest.open("GET", 'https://jsonplaceholder.typicode.com/todos/1');
httpRequest.send();