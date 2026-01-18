// #kUSgFqWY
//
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.

let table = document.getElementById('table');
let tableGeneratorForm = document.forms.tableGeneratorForm;


tableGeneratorForm.onsubmit = function (e) {
    table.innerText = ''
    e.preventDefault();
    let linesValue = +tableGeneratorForm.lines.value;
    let cellsValue = +tableGeneratorForm.cells.value;
    let dataValue = tableGeneratorForm.data.value;
    console.log(linesValue, cellsValue, dataValue);

    for (let i = 0; i < linesValue; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cellsValue; j++) {
            let td = document.createElement('td')
            td.innerText = dataValue;
            tr.appendChild(td);
        }

        table.appendChild(tr);

    }
}
