// #zg6Fifnqig
//
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
//
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку

class Cinderella{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let cinderellas = [
    new Cinderella("Yustyna", 18, 35),
    new Cinderella("Olena", 19, 36),
    new Cinderella("Ira", 20, 37),
    new Cinderella("Tessia", 21, 38),
    new Cinderella("Caera", 22, 39),
    new Cinderella("Maria", 23, 40),
    new Cinderella("Sofia", 24, 34),
    new Cinderella("Yulia", 25, 33),
    new Cinderella("Nadia", 26, 41),
    new Cinderella("Vika", 27, 32)
];

let prince = new Prince("Arthur", 25, 38);

for (let girl of cinderellas){
    if (girl.footSize === prince.shoeSize) {
        console.log(`Попелюшка для ${prince.name} є ${girl.name}`);
        prince.wife = girl
    }
}

let foundCinderella = cinderellas.find(girl => girl.footSize === prince.shoeSize);

prince.wife = foundCinderella;

console.log("Попелюшка це:", foundCinderella.name);
console.log(prince);