// #8Nmt60ZT
// – створити блок,
// – додати йому класи wrap, collapse, alpha, beta
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
// – додати цей блок в body.
// – клонувати його повністю, та додати клон в body.

let div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.innerText = 'Sovereign'
div.style.background = 'purple';
div.style.color = 'black';
div.style.fontSize = '45px';
document.body.appendChild(div);
let cloneDiv = div.cloneNode(true);
document.body.appendChild(cloneDiv);
