// Файл: task2.js

function recursiveFunction(num) {
    console.log(num);
    if (num <= 0) {
        return;
    } else {
        recursiveFunction(num - 1);
    }
}

// Виклик функції з аргументом 5
recursiveFunction(5);
