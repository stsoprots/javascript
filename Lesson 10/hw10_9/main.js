// #bq1zkx7WP
//
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
//
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається

let price = +localStorage.getItem('currentPrice') || 100;
let lastUpdate = +localStorage.getItem('lastUpdate') || 0

let now = Date.now();

if (now - lastUpdate > 10000) { 
    price += 10;
    localStorage.setItem('currentPrice', price);
    localStorage.setItem('lastUpdate', now);

    console.log('Ціну оновлено!');
}else{
    let secondsLeft = Math.ceil((10000 - (now - lastUpdate)) / 1000);
    console.log(`Зачекайте ще ${secondsLeft} сек. для оновлення ціни.`);
}

let target = document.getElementById('target');
target.innerText = `${price}грн`;