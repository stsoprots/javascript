// #0Kxco1edSN
// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function createList(textOflist, number) {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${textOflist}</li>`)
    }
    document.write(`</ul>`)
}
let li = prompt('Введіть текст пункта списку:');
let num = +prompt('Введіть к-сть пунктів списку:');
createList(li, num)