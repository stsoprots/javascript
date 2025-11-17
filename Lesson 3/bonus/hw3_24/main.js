// #reLkOkTB29Q
//
// створити масив книжок (назва, кількість сторінок, автори , жанри).
// – знайти найбільшу книжку.
// – знайти книжку/ки з найбільшою кількістю жанрів
// – знайти книжку/ки з найдовшою назвою
// – знайти книжку/ки, які писали 2 автори
// – знайти книжку/ки, які писав 1 автор

let books = [
    {
        title: "Тіні забутих предків",
        pages: 240,
        authors: ["Михайло Коцюбинський"],
        genres: ["Повість", "Класика", "Містика"]
    },
    {
        title: "Кайдашева сім'я",
        pages: 180,
        authors: ["Іван Нечуй-Левицький"],
        genres: ["Реалізм", "Сатира", "Побутова література"]
    },
    {
        title: "Захар Беркут",
        pages: 260,
        authors: ["Іван Франко"],
        genres: ["Історична проза", "Пригоди"]
    },
    {
        title: "Чорна рада",
        pages: 350,
        authors: ["Пантелеймон Куліш"],
        genres: ["Історичний роман", "Класика", "Політична проза"]
    },
    {
        title: "Енеїда",
        pages: 300,
        authors: ["Іван Котляревський"],
        genres: ["Поема", "Сатира", "Гумор"]
    },
    {
        title: "Тигролови",
        pages: 220,
        authors: ["Іван Багряний"],
        genres: ["Пригоди", "Романтика", "Драма"]
    },
    {
        title: "Лісова пісня",
        pages: 170,
        authors: ["Леся Українка"],
        genres: ["Драма-феєрія", "Містика", "Класика"]
    },
    {
        title: "Солодка Даруся",
        pages: 250,
        authors: ["Марія Матіос"],
        genres: ["Драма", "Психологічна проза"]
    }
];

let maxPages = books[0].pages;
for(let book of books) {
    if (book.pages > maxPages) {
        maxPages = book.pages;
    }
}
console.log('Найбільша книжка: ' + maxPages);

let maxGenres = 0;
for (let book of books) {
    if (book.genres.length > maxGenres) {
        maxGenres = book.genres.length;
    }
}

let booksWithMostGenres = [];
for (let book of books) {
    if (book.genres.length === maxGenres) {
        console.log('Книги з найбільшою кількістю жанрів:', book.title);
    }
}

// Знаходимо максимальну довжину назви
let maxTitleLength = 0;
for (let book of books) {
    if (book.title.length > maxTitleLength) {
        maxTitleLength = book.title.length;
    }
}

// Виводимо назви книг з найдовшою назвою
for (let book of books) {
    if (book.title.length === maxTitleLength) {
        console.log('Книги з найбільшою назвою:', book.title);
    }
}


for (let book of books) {
    if (book.authors.length === 2) {
        console.log('Ось книги які писали два автора:', book.title);
    }else{
        console.log('Немає книг які були написані двома авторами');
    }
}

for (let book of books) {
    if (book.authors.length === 1) {
        console.log('Ось книги які написав один автор:', book.title);
    }else{
        console.log('Немає книг які були написані одним автором');
    }
}

//-------------------------------------------------//

// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
//     d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)

let emptyArray = [];
let index = 0;

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        emptyArray[index]= i;
        index++;
    }
}

for (let i = 0; i < 100; i++) {
    if (!(i % 2 === 0)) {
        emptyArray[index]= i;
        index++;
    }
}

for (let i = 0; i < 20; i++) {
    let num = Math.floor(Math.random() * 1000);
    emptyArray[index]= num;
    index++;
}

for (let i = 0; i < 20; i++) {
    let num = Math.floor(Math.random() * (732 - 8));
    emptyArray[index]= num;
    index++;
}
console.log(emptyArray);

// 2. Вивести за допомогою console.log кожен третій елемент

for (let i = 2; i < emptyArray.length; i+=3) {
    console.log(emptyArray[i]);
}

// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.

for (let i = 2; i < emptyArray.length; i+=3) {
    if (emptyArray[i] % 2 === 0) {
        console.log(emptyArray[i]);
    }
}

// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив

let newArr = [];

for (let i = 2; i < emptyArray.length; i+=3) {
    if (emptyArray[i] % 2 === 0) {
        newArr.push(emptyArray[i]);
    }
}
console.log(newArr);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

for (let i = 0; i < emptyArray.length - 1; i++) {
    if (emptyArray[i + 1] % 2 === 0) {
        console.log(emptyArray[i]);
    }
}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let purchases = [100, 250, 50, 168, 120, 345, 188];

let sum = 0;
for (let i = 0; i < purchases.length; i++) {
    sum += purchases[i];
}
let average = sum / purchases.length;
console.log(average);


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let randomArray = [];

for (let i = 0; i < 20; i++) {
    let randomNum = Math.floor(Math.random() * 1000);
    randomArray.push(randomNum);
}
console.log(randomArray);

let multArr = [];

for (let i = 0; i < randomArray.length; i++) {
    multArr.push(randomArray[i] * 5);
}
console.log(multArr);

// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.

let mixedArray = [10, 'hello', true, 25, 'world', false, 3.14, 'okten'];

let numArr = [];
for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === 'number') {
        numArr.push(mixedArray[i]);
    }
}
console.log(numArr);

// – Дано 2 масиви з рівною кількістю об’єктів.
//     Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
//
// З’єднати в один об’єкт користувача та місто з відповідними “id” та “user_id” .
// Записати цей об’єкт в новий масив
// Example:
//
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
// // TO BE CONTINUED …..
// ];

let usersWithCities = [];
for (let i = 0; i < usersWithId.length; i++) {
     let user = usersWithId[i];
     for (let j = 0; j < citiesWithId.length; j++) {
         if (citiesWithId[j].user_id === user.id) {
             user.address = citiesWithId[j];
         }
     }
     usersWithCities.push(user);
}
console.log(usersWithCities);



// – Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let numbers = [12, 45, 7, 23, 56, 89, 34, 2, 18, 67];
for (let num of numbers) {
    if (num % 2 === 0) {
        console.log(num);
    }
}

// – Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let secondArr = [];
for (let num of numbers) {
    secondArr.push(num);
}
console.log(secondArr);

//
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.

let letters = ['a', 'b', 'c'];

let word1 = '';
for (let i = 0; i < letters.length; i++) {
    word1 += letters[i];   // додаємо кожну букву до рядка
}
console.log('Слово через for:', word1);

// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.
// додаємо кожну букву до рядка

let word2 = '';
let i = 0;
while (i < letters.length) {
    word2 += letters[i];
    i++;
}
console.log('Слово через while:', word2);

// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.

let word3 = '';
for (let letter of letters) {
    word3 += letter;
}
console.log('Слово через for of:', word3);