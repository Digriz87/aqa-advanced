// Файл: task3.js

function divide(numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("Один з аргументів не є числом");
    }
    if (denominator === 0) {
        throw new Error("Ділення на нуль неможливе");
    }
    return numerator / denominator;
}

// Виклики функції divide з різними значеннями

try {
    console.log(divide(10, 2)); // Виведе 5
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide(10, 0)); // Викине помилку
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide(10, 'a')); // Викине помилку
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}
