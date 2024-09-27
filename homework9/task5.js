// Створюємо масив об'єктів users
let users = [
    { name: "Сергій", email: "serg@example.com", age: 25 },
    { name: "Ольга", email: "olga@example.com", age: 22 },
    { name: "Іван", email: "ivan@example.com", age: 30 }
];

// Перебираємо масив та деструктуризуємо
for (let user of users) {
    let { name, email, age } = user;
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}
