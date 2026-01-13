// #gsKLAsNWM
//
// *Через Array.prototype. створити власний foreach, filter

//forEach
Array.prototype.myForEach = function (callback) {
    for (const item of this) {
        callback(item);
    }
};
// Перевірка
numbersArray = [11, 22, 33, 44, 55]
numbersArray.myForEach(x => console.log(`Елемент: ${x}`));

//filter
Array.prototype.myFilter = function (callback) {
    let result = [];
    for (const item of this) {
        if (callback(item)) {
            result.push(item);
        };
    }
    return result;
};
// Перевірка
let cars = [
    {model: 'A4', hp: 150},
    {model: 'RS7', hp: 600},
    {model: 'A6', hp: 245}
];

let powerfulCars = cars.myFilter(car => car.hp > 200);
console.log(powerfulCars);