// #Jg0gPO00
//
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

let convertValue = document.getElementById('convertValue');
let input = document.getElementById('input');
convertValue.oninput = function() {
    // 2.2046
    let kg = +this.value
    let result = kg * 2.2046
    input.placeholder = result;

}
