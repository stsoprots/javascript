// #ymAmN2xJ
//
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом


//my way
let div = document.createElement('div');
let form = document.forms.myForm;
form.onsubmit = function(ev) {
    ev.preventDefault();
    let name = form.name.value;
    let surname = form.surname.value;
    let age = form.age.value;

    let h21 = document.createElement('h2');
    h21.innerText = name;

    let h22 = document.createElement('h2');
    h22.innerText = surname;

    let h3 = document.createElement('h3');
    h3.innerText = age;


    let user = {
        name: name,
        surname: surname,
        age: age,
    }
    let h4 = document.createElement('h4');
    h4.innerText = JSON.stringify(user);

    let obj = {name, surname, age};
    console.log(obj);

    div.append(h21, h22, h3, h4);
}


document.body.appendChild(div);

//in video
// let form = document.forms.myForm;
// let target = document.getElementById("target");

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let nameValue = form.name.value;
//     let surnameValue = form.surname.value;
//     let ageValue = form.age.value;
//     let obj = {nameValue, surnameValue, ageValue};
//     console.log(obj);
//     target.innerText = obj.nameValue + ' ' + obj.surnameValue + ' ' + obj.ageValue;
// })

