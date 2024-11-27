const Book = require('./Book');
const EBook = require('./EBook');

// Створюємо кілька екземплярів класу Book
let book1 = new Book("Майстер і Маргарита", "Михайло Булгаков", 1967);
let book2 = new Book("Тарас Бульба", "Микола Гоголь", 1835);
let book3 = new Book("1984", "Джордж Орвелл", 1949);

// Виводимо інформацію про книги
book1.printInfo();
book2.printInfo();
book3.printInfo();

// Створюємо екземпляр класу EBook
let ebook1 = new EBook("Програмування на JavaScript", "Девід Фленаган", 2022, "pdf");
ebook1.printInfo();

// Використовуємо геттери та сеттери
ebook1.fileFormat = "epub";
console.log(ebook1.fileFormat); // epub

// Зміна властивостей книги через сеттери
book1.year = 1966;
console.log(book1.year); // 1966

// Пошук найдавнішої книги
let books = [book1, book2, book3, ebook1];
let oldestBook = Book.findOldestBook(books);
console.log("Найдавніша книга:");
oldestBook.printInfo();

// Використання статичного методу для створення EBook з Book
let newEBook = EBook.fromBook(book3, "mobi");
newEBook.printInfo();
