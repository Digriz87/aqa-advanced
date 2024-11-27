// Клас для роботи з todo об'єктами
class TodoFetcher {
    async fetchTodo() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            const todo = await response.json();
            return todo;
        } catch (error) {
            console.error("Error fetching todo:", error);
        }
    }
}

// Клас для роботи з user об'єктами
class UserFetcher {
    async fetchUser() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
            const user = await response.json();
            return user;
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    }
}

// Використання класів
async function handleClassRequests() {
    const todoFetcher = new TodoFetcher();
    const userFetcher = new UserFetcher();

    try {
        const [todo, user] = await Promise.all([todoFetcher.fetchTodo(), userFetcher.fetchUser()]);
        console.log("Todo:", todo);
        console.log("User:", user);

        const firstResolved = await Promise.race([todoFetcher.fetchTodo(), userFetcher.fetchUser()]);
        console.log("First resolved:", firstResolved);
    } catch (error) {
        console.error("Error in class async function:", error);
    }
}

// Виклик функції
handleClassRequests();
