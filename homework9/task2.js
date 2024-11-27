// Створюємо об'єкт book
let book = {
    title: "Майстер і Маргарита",
    author: "Михайло Булгаков",
    year: 1967
};

// Деструктуризація об'єкта
let { title, author } = book;

// Виводимо назву та автора в консоль
console.log(title);  // Майстер і Маргарита
console.log(author); // Михайло Булгаков
