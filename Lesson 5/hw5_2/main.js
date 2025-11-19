// #ETGAxbEn8l
// – створити функцію, яка обчислює та повертає площу кола з радіусом r

let roundSquare = (radius) => Math.PI * radius ** 2
let r = +prompt('Введіть радіус кола:');

console.log(`Площа кола з радуісом r = ${r}:`, roundSquare(r));