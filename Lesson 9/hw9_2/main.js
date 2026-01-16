// #OPLI89c9G
// – Є масив:
//     [‘Main’,’Products’,’About us’,’Contacts’]
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let arr = ['Main', 'Products', 'About us', 'Contacts']

let listOfMenu = document.createElement('ul')
listOfMenu.classList.add('menu')


document.body.appendChild(listOfMenu)

for (let element of arr) {
    let li = document.createElement('li');
    li.innerText = element;
    listOfMenu.appendChild(li)
}