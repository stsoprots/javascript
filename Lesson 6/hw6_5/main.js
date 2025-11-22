// #bfoJuse4ZzP
// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = ‘Ревуть воли як ясла повні’;
// let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]

let string = 'Ревуть воли як ясла повні';

let stringToarray = (str => {
    if (str){
        return str.split(' ');
    }
    return [''];
})
console.log(stringToarray(string));