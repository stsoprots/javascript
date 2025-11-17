// #mDMWMW5a
//
// – Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

document.write('<ul>')
for (let i in arr) {
    console.log(i)
    document.write('<li>' + i + '</li>')
}
document.write('</ul>')