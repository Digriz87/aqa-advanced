function checkOrder(available, ordered) {
    if (ordered === 0) {
        return "Your order is empty";
    } else if (ordered > available) {
        return "Your order is too large, we don’t have enough goods.";
    } else {
        return "Your order is accepted";
    }
}

console.log(checkOrder(100, 50));  // Виведе: "Your order is accepted"
console.log(checkOrder(100, 0));   // Виведе: "Your order is empty"
console.log(checkOrder(100, 150)); // Виведе: "Your order is too large, we don’t have enough goods."

