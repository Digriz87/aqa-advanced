const number = 5;

// Таблиця множення з використанням циклу for
console.log("Таблиця множення (for):");
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

// Таблиця множення з використанням циклу while
console.log("\nТаблиця множення (while):");
let j = 1;
while (j <= 10) {
    console.log(`${number} x ${j} = ${number * j}`);
    j++;
}
