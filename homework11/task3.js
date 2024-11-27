// Функція для отримання todo об'єкта з використанням async/await
async function fetchTodoAsync() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const todo = await response.json();
        return todo;
    } catch (error) {
        console.error("Error fetching todo:", error);
    }
}

// Функція для отримання user об'єкта з використанням async/await
async function fetchUserAsync() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const user = await response.json();
        return user;
    } catch (error) {
        console.error("Error fetching user:", error);
    }
}

// Використання Promise.all та Promise.race з async/await
async function handleAsyncRequests() {
    try {
        const [todo, user] = await Promise.all([fetchTodoAsync(), fetchUserAsync()]);
        console.log("Todo:", todo);
        console.log("User:", user);

        const firstResolved = await Promise.race([fetchTodoAsync(), fetchUserAsync()]);
        console.log("First resolved:", firstResolved);
    } catch (error) {
        console.error("Error in async function:", error);
    }
}

// Виклик функції
handleAsyncRequests();
