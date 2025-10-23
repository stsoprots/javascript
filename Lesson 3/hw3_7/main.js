// #4WrHwFTEop0
//
// є масив
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// за допомогою циклу вивести:
//  – користувачів зі статусом true
//  – користувачів зі статусом false
//  – користувачів, які старші за 30 років

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// My way
// for (let i = 0; i < users.length; i++) {
//     if (users[i].status) {
//         console.log(`${users[i].name}`);
//     }
// }
// for (let i = 0; i < users.length; i++) {
//     if (!users[i].status) {
//         console.log(`${users[i].name}`);
//     }
// }
// for (let i = 0; i < users.length; i++) {
//     if (users[i].age > 30) {
//         console.log(`${users[i].name}`);
//     }
// }


// Користувачі зі статусом true
for (const user of users) {
    if (user.status) {
        console.log(user);
    }
}

// Користувачі зі статусом false
for (const user of users) {
    if (!user.status) {
        console.log(user);
    }
}

// Користувачі, які старші за 30 років
for (const user of users) {
    if (user.age > 30) {
        console.log(user);
    }
}