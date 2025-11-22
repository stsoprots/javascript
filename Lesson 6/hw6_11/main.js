// #EP5I1UUzAX
//
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
// Приклад моделі кінцевого об’єкту

// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
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

let reduce = deck.reduce((acc, card) => {
    if (card.cardSuit) {
        acc.spades.push(card.value);
        acc.diamonds.push(card.value);
        acc.heart.push(card.value);
        acc.clubs.push(card.value);
    }
    return acc;
}, {spades: [], diamonds: [], heart: [],  clubs: []});
console.log(reduce);
