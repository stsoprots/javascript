// #hOL6126
// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

function createList(itemOflist) {
    document.write(`<ul> 
                        <li>${itemOflist}</li>
                        <li>${itemOflist}</li>
                        <li>${itemOflist}</li>
                    </ul>`)
}
let li = prompt('Введіть пункт списку:');
createList(li)
