// #5kla3yMpgp
//
// – (Те саме, тільки через клас)
//
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car

class Car {
    constructor(model, brand, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.brand = brand;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    info() {
        let keys = Object.keys(this);
        for (let i = 0; i < 5; i++) {
            let key = keys[i];
            console.log(key +'-'+ this[key]);
        }
    };

    increaseMaxSpeed (speedToAdd) {
        if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
            console.log(`Нова максимальна швидкість: ${this.maxSpeed}`);
    };
    changeYear (year) {
        if (year > 1815) this.year = year;
            console.log(`Новий рік випуску: ${this.year}`);
    };
    addDriver (driver) {
        if (driver) this.driver = driver;
    }
}
let car = new Car('A7', 'Audi', 2021, 250, 2967)
console.log(car);

car.drive()
car.info()
car.increaseMaxSpeed(100)
car.changeYear(2023)
car.addDriver({})