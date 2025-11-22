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
    if (card.cardSuit === 'spade') {
        acc.spades.push(card.value);
    } else if (card.cardSuit === 'diamond') {
        acc.diamonds.push(card.value);
    } else if (card.cardSuit === 'heart') {
        acc.hearts.push(card.value);
    } else if (card.cardSuit === 'clubs') {
        acc.clubs.push(card.value);
    }
    return acc;
}, {spades: [], diamonds: [], hearts: [],  clubs: []});
console.log(reduce);
