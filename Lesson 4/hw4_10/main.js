// #pghbnSB
// – створити функцію яка повертає найменьше число з масиву

function minNum (array){
    let min = array[0];
    for(let i = 1; i < array.length; ++i){
        let number = array[i];
        if(number < min){
            min = number;
        }
    }

    return min;
}
let numArr = [12, 45, 78, 3.14, 22, 90, 56, 7, 100, 88, 34, 67, 5, 0, -1, 42, "Apple", "Banana", 11, 9, "Orange"];

console.log(minNum(numArr));