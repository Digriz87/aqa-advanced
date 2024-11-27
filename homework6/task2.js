function isAdult(age) {
    return age >= 18;
}

console.log(isAdult(25)); // Виведе: true
console.log(isAdult(15)); // Виведе: false

const isAdultExpression = function(age) {
    return age >= 18;
};

console.log(isAdultExpression(25)); // Виведе: true
console.log(isAdultExpression(15)); // Виведе: false

const isAdultArrow = (age) => age >= 18;

console.log(isAdultArrow(25)); // Виведе: true
console.log(isAdultArrow(15)); // Виведе: false

