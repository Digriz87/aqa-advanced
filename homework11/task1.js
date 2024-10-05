function printAfterDelay(text, delay) {
    setTimeout(() => {
        console.log(text);
    }, delay);
}

// Виклик функції для прикладу
printAfterDelay("Hello, World!", 2000); // Виведе "Hello, World!" через 2 секунди
