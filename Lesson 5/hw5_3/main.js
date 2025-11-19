// #Mbiz5K4yFe7
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

let roundCylinder = (height, radius) => 2 * Math.PI * radius * (radius + height);
let h = +prompt('Введіть висоту циліндра:');
let r = +prompt('Введіть радіус циліндра:');

console.log(`Площа циліндра:`, roundCylinder(h, r));