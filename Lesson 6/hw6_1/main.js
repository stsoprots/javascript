// #dFeorS3m7u
// – Знайти та вивести довжину наступних стрінгових значень
//  ‘hello world’
// ‘lorem ipsum’
// ‘javascript is cool’

let str1 = 'hello world'
let str2 = 'lorem ipsum'
let str3 = 'javascript is cool'

console.log(str1.length);
console.log(str2.length);
console.log(str3.length);

//------------------------------

let strs = [str1, str2, str3];
for (let str of strs){
    console.log(str.length);
}