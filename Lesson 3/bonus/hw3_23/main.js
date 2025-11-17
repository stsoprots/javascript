// #Tfrwls7FM
//
// – Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

document.write('<ul>')
for (let i = 0; i < 100; i++) {
    if (!(i % 2 === 0)) {
        console.log(i)
        document.write('<li>' + i + '</li>')
    }
}
document.write('</ul>')