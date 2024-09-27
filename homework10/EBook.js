const Book = require('./Book');

class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this._fileFormat = fileFormat;
    }

    // Геттер та сеттер для властивості fileFormat
    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        const allowedFormats = ['pdf', 'epub', 'mobi'];
        if (allowedFormats.includes(value)) {
            this._fileFormat = value;
        } else {
            throw new Error('Формат файлу повинен бути одним із наступних: pdf, epub, mobi.');
        }
    }

    // Перевизначення методу printInfo
    printInfo() {
        console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Формат файлу: ${this.fileFormat}`);
    }

    // Статичний метод для створення EBook з екземпляра Book та формату файлу
    static fromBook(book, fileFormat) {
        return new EBook(book.title, book.author, book.year, fileFormat);
    }
}

module.exports = EBook;
