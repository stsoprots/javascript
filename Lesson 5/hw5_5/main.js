// #59g0IsA
// – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

let writterParagraph = (text) => {
    document.write(`<p>${text}</p>`)
}
let p = prompt('Введіть текст для параграфа:');
writterParagraph(p)
