// Створюємо об'єкт person
let person = {
    firstName: "Анна",
    lastName: "Ковальчук",
    age: 30
};

// Додаємо email
person.email = "anna.kov@example.com";

// Видаляємо властивість age
delete person.age;

// Виводимо оновлений об'єкт person в консоль
console.log(person);
