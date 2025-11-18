// #gEFoxMMO
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

function createList(array) {
    document.write(`<ul>`)
    for (let item of array) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
let mixedArray = [42, "Hello", true, 3.14, "World", false, 100, "JavaScript", true, 0, "Hello World", false, 7, "Array", true, 88, "Mixed", false, 1, "Test"];

createList(mixedArray);