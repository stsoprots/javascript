// #EKRNVPM
//
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) ->13

function sum(arr) {
    let basket = 0;
    for (let number of arr) {
        basket += number;
    }
    return basket;
}
let numbersArray = [12, 45, 78, 3, 22, 90, 56, 7, 100, 88, 34, 67, 5, 0, 42, 19, 9, 73, 61, 27];
console.log(sum(numbersArray));

