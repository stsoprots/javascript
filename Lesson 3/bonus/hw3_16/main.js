// #9stMq2ou
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let arr = [6, 'six', 's', 'i', 'x', '6six', 111111, true, false, 6.0]
for (let i = 0; i < arr.length; i++ ) {
    if (typeof arr[i] === "number") {
        console.log(arr[i]);
    }
}