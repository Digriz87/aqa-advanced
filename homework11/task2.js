// Функція для отримання todo об'єкта
function fetchTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .catch(error => console.error("Error fetching todo:", error));
}

// Функція для отримання user об'єкта
function fetchUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json())
        .catch(error => console.error("Error fetching user:", error));
}

// Використання Promise.all та Promise.race
Promise.all([fetchTodo(), fetchUser()])
    .then(values => {
        const [todo, user] = values;
        console.log("Todo:", todo);
        console.log("User:", user);
    })
    .catch(error => console.error("Error in Promise.all:", error));

Promise.race([fetchTodo(), fetchUser()])
    .then(result => {
        console.log("First resolved:", result);
    })
    .catch(error => console.error("Error in Promise.race:", error));
