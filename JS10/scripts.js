/*1) HTML, CSS

Посмотрите видео, как подготовить верстку: 


2) JS

- Соберите в переменные необходимые элементы: кнопку для открытия окошка, само окошко вместе с фоном, окошко без фона, кнопку закрытия окошка.

- Повесьте обработчик клика на кнопку открытия - к окошку должен добавляться класс, в котором через CSS задана видимость блока.

Чтобы добавить класс к DOM-элементу, используется метод element.classList.add('classname')

- Повесьте обработчик клика на кнопку закрытия окошка - при этом должен удаляться класс, который добавляли в предыдущем обработчике.
Чтобы удалить класс из DOM-элемента, используется метод element.classList.remove('classname')

- Повесьте обработчик клика на глобальный объект window, чтобы реализовать закрытие окошка по клику на тёмную область. Т.к. эта область является "оболочкой" окошка, мы должны проверить, была ли именно эта область целью клика (не центральная, основная часть окошка, а именно тёмная).

Для обращения к элементу, на который пришелся клик, можно использовать свойство объекта события -

event.target (event - это параметр функции-обработчика события,  и его свойство target точно указывает на тот элемент, на который кликнул пользователь).

*/



let openButton = document.querySelector('.popup-btn');
let div = document.querySelector('.popup');
let content = document.querySelector('.popup-content');
let closeButton = document.querySelector('.popup_close');


openButton.addEventListener('click', ()=>{
    div.classList.add('opened');
});

closeButton.addEventListener('click', ()=>{
    div.classList.remove('opened');
});
window.addEventListener('click',(event)=>{
    if(event.target == div){
        div.classList.remove('opened');
    }
});





