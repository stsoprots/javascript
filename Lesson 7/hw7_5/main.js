// #8abtVjRv
//
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)


class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

class Product{
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}

let clientsArray = [
    new Client(1, 'Олексій', 'Коваленко', 'oleksii.kov@test.ua', '+380501234567', [
        new Product('Мишка', 500),
        new Product('Килимок', 300)
    ]),
    new Client(2, 'Марія', 'Бондаренко', 'bond.mariya@example.com', '+380639876543', [
        new Product('Клавіатура', 1200),
        new Product('Монітор', 8500),
        new Product('HDMI кабель', 400)
    ]),
    new Client(3, 'Дмитро', 'Ткаченко', 'dmitro.tk@mail.ua', '+380971112233', [
        new Product('Ноутбук', 42000),
    ]),
    new Client(4, 'Юлія', 'Кравченко', 'yulia.krav@work.ua', '+380504445566', [
        new Product('Планшет', 12000),
        new Product('Стилус', 3500),
    ]),
    new Client(5, 'Андрій', 'Шевченко', 'sheva.andriy@corp.net', '+380667778899', [
        new Product('Навушники', 2500),
        new Product('Мікрофон', 4000),
    ]),
    new Client(6, 'Олена', 'Марченко', 'olena.march@home.io', '+380932223344', [
        new Product('Смарт-годинник', 5600),
    ]),
    new Client(7, 'Ігор', 'Мороз', 'moroz.igor@test.ua', '+380675556677', [
        new Product('Відеокарта', 25000),
        new Product('Процесор', 12000),
    ]),
    new Client(8, 'Вікторія', 'Козак', 'v.kozak@web.ua', '+380951110022', [
        new Product('Роутер', 1800),
    ]),
    new Client(9, 'Сергій', 'Олійник', 'serg.oil@mail.com', '+380633332211', [
        new Product('Веб-камера', 3200),
    ]),
    new Client(10, 'Наталія', 'Мельник', 'nat.melnik@service.ua', '+380994443322', [
        new Product ('Принтер', 6000),
        new Product ('Картридж', 1500),
    ])
];

// console.log(clientsArray);

console.log(clientsArray.sort((a, b) => a.order.length - b.order.length));