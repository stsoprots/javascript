// #bolvdlhP

// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
// Після опису, використовуючи функції масивів:
//  – знайти піковий туз
//  – всі шістки
//  – всі червоні карти
//  – всі буби
//  – всі трефи від 9 та більше
//
// Приклад моделі об’єкту карти:
//
// {
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//     color:”, // ‘red’,’black’
// }

let suits = [
    { suit: 'spade',  color: 'black' },
    { suit: 'diamond', color: 'red' },
    { suit: 'heart',   color: 'red' },
    { suit: 'clubs',   color: 'black' }
];

let values = ['6','7','8','9','10','jack','queen','king','ace'];

let deck = [];

for (let suit of suits) {
    for (let value of values) {
        deck.push({
            cardSuit: suit.suit,
            value: value,
            color: suit.color
        });
    }
}
console.log(deck);

let filterOne = deck.filter(card => {
    return card.cardSuit === 'spade' && card.value === 'ace';
});
console.log(filterOne);

let filterTwo = deck.filter(card => {
    return card.value === '6';
});
console.log(filterTwo);

let filterThree = deck.filter(card => {
    return card.color === 'red';
});
console.log(filterThree);

let filterFour = deck.filter(card => {
    return card.cardSuit === 'diamond';
});
console.log(filterFour);

let filterFive = deck.filter(card => {
    return values.indexOf(card.value) >= values.indexOf('9');
});
console.log(filterFive);
