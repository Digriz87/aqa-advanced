// Створюємо об'єкти car1 та car2
let car1 = {
    brand: "Toyota",
    model: "Corolla",
    year: 2015
};

let car2 = {
    brand: "Honda",
    model: "Civic",
    owner: 2017
};

// Використовуємо spread для об'єкта car3
let car3 = { ...car1, ...car2 };

// Виводимо об'єкт car3 в консоль
console.log(car3);
