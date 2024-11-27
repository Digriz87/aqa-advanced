class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    // Геттери та сеттери для всіх властивостей
    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value === 'string' && value.trim().length > 0) {
            this._title = value;
        } else {
            throw new Error('Назва книги має бути непорожнім рядком.');
        }
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value === 'string' && value.trim().length > 0) {
            this._author = value;
        } else {
            throw new Error('Ім\'я автора має бути непорожнім рядком.');
        }
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (typeof value === 'number' && value > 0) {
            this._year = value;
        } else {
            throw new Error('Рік видання має бути додатним числом.');
        }
    }

    // Метод для виведення інформації про книгу
    printInfo() {
        console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}`);
    }

    // Статичний метод для пошуку найдавнішої книги
    static findOldestBook(books) {
        return books.reduce((oldest, current) => (current.year < oldest.year ? current : oldest));
    }
}

module.exports = Book;
