// #8lld9HMxXWB
//
// – Перевести до великого регістру наступні стрінгові значення
//       ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’

let str1 = 'hello world'
let str2 = 'lorem ipsum'
let str3 = 'javascript is cool'

console.log(str1.toUpperCase())
console.log(str2.toUpperCase())
console.log(str3.toUpperCase())

//------------------------------

let strs = [str1, str2, str3];
for (let str of strs){
    console.log(str.toUpperCase());
}