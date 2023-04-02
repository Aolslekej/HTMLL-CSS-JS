let buttons = document.querySelectorAll('button');
let content = document.querySelectorAll('div');

function openTab(actButton, blockID){
    content.forEach(element =>{
        if(element.id === blockID){
            element.style.display = 'block';
        }else{
            element.style.display = 'none';
        }
    })
}

window.addEventListener('click', (event) => {
    for (let item of buttons) {
        if (event.target === item) {
            item.classList.add('active');
            let id = event.target.id + '-content';
            openTab(event.target, id);
        }else{
            item.classList.remove('active');
        }
    }
})