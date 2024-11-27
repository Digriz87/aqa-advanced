// Файл: task1.js

function handleNum(number, evenCallback, oddCallback) {
    if (number % 2 === 0) {
        evenCallback();
    } else {
        oddCallback();
    }
}

function handleEven() {
    console.log("number is even");
}

function handleOdd() {
    console.log("number is odd");
}

// Виклик функції handleNum з довільним числом
handleNum(7, handleEven, handleOdd);
