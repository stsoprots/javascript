// #kpsbSQCt2Lf
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, i1, i2){
    if (i1 < arr.length && i2 < arr.length){
        let temp = arr[i1]; // 11
        arr[i1] = arr[i2];
        arr[i2] = temp;

        return arr;
    }
    return -Infinity;
}
const numArray = [5, 12, 23, 34, 45, 56, 67];
console.log(swap(numArray, 0, 1));
