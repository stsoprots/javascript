//#ClDsAm7xba7
// – Перевести до нижнього регістру наступні стрінгові значення
//
//       ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’

let str1 = 'hello world'
let str2 = 'lorem ipsum'
let str3 = 'javascript is cool'

console.log(str1.toLowerCase())
console.log(str2.toLowerCase())
console.log(str3.toLowerCase())

//------------------------------

let strs = [str1, str2, str3];
for (let str of strs){
    console.log(str.toLowerCase());
}