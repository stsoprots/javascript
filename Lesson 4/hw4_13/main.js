// #mkGDenYnNjn.html
//Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400


function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (let currency of currencyValues) {
        if (currency.currency === exchangeCurrency) {
            return sumUAH / currency.value;
        }
    }
    return null;
}

let currencyArray = [
    {currency: 'USD', value: 42.25},
    {currency: 'EUR', value: 49.20}
];


console.log(exchange(1000, [{currency: 'USD', value: 42.25}, {currency: 'EUR', value: 49.20}], 'USD'));




