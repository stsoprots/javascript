// #sH8c4er
//
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.

//my way
let div = document.createElement('div');
div.classList.add('text');

let buttonElement = document.createElement('button');
buttonElement.classList.add('button')
buttonElement.innerText = 'Видалити';


document.body.append(div, buttonElement);

buttonElement.onclick = function() {
    div.remove();
};

//in video
// const buttons = document.getElementsByTagName('button');
// const button = buttons[0];
//
// button.onclick = function() {
//     // document.getElementById('text').remove();
//     const div = document.getElementById('text');
//     div.style.display = 'none';
// }
//
// button.addEventListener('click', () => {
//     // document.getElementById('text').remove();
//     const div = document.getElementById('text');
//     div.style.display = 'none';
// })

