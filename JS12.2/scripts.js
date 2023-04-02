let changeTheme = document.querySelector('.change-theme');
let body = document.querySelector('body');

changeTheme.addEventListener('click', (event =>{
    if(body.classList.contains('dark-theme')){
        changeTheme.innerHTML = 'Тёмная тема';
        body.classList.remove('dark-theme');
        changeTheme.style.color = 'black';
    }else{
        changeTheme.innerHTML = 'Светлая тема';
        body.classList.add('dark-theme');
        changeTheme.style.color = 'white';
    }
}))