// #s24slNyz7
//
// – Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write


document.write('<ul>')
for (let i = 0; i < 100; i+=2) {
    console.log(i)
    document.write('<li>' + i + '</li>')
}
document.write('</ul>')