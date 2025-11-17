// #u3vmD0YJXh
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let arr = [6, 'six', 's', 'i', 'x', '6six', 111111, true, false, 6.0]
for (let i = 0; i < arr.length; i++ ) {
    if (typeof arr[i] === "boolean") {
        console.log(arr[i]);
    }
}
