const axios = require('axios');



// Налаштування базового URL для JSONPlaceholder API
const api = axios.create({
    baseURL: 'https://demoqa.com'
});

// Інтерсептори для логування запитів та відповідей
api.interceptors.request.use(request => {
    console.log('Запит:', request);
    return request;
});

api.interceptors.response.use(response => {
    console.log('Відповідь:', response);
    return response;
}, error => {
    console.error('Помилка:', error);
    return Promise.reject(error);
});

// POST запит - створення нового користувача
test('Створити нового користувача', async () => {
    const newUser = {
        userName: 'newtestuserab',
        password: 'Test@123451'
    };

    const response = await api.post('/Account/v1/User', newUser);
    
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('userID');
    expect(response.data).toHaveProperty('username', newUser.userName);
});

// POST запит - авторизація користувача
    test('Авторизація користувача', async () => {
        const user = {
            userName: 'newtestuserab',
            password: 'Test@123451'
        };

        const response = await api.post('/Account/v1/Authorized', user);
        
        expect(response.status).toBe(200);
        
    });

    // GET запит - отримання всіх постів
    test('Отримати список постів', async () => {
        const response = await api.get('/BookStore/v1/Books');
        
        // Перевірка статусу відповіді
        expect(response.status).toBe(200);
    });

    // GET запит - отримання книги за ISBN
    test('Отримати книгу за ISBN', async () => {
        const isbn = '9781449325862'; // ISBN книги
        const response = await api.get(`/BookStore/v1/Book?ISBN=${isbn}`);
        
        expect(response.status).toBe(200);
        // Перевірка структури отриманого об'єкта
        expect(response.data).toHaveProperty('isbn', isbn);
        expect(response.data).toHaveProperty('title');
        expect(response.data).toHaveProperty('subTitle');
    });

