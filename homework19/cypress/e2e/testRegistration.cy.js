describe('template spec', () => {

  // Генеруємо випадкові рядки з літер (без цифр)
  const generateUniqueString = (prefix, length) => {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Лише англійські літери
    let result = prefix; // Префікс для зрозумілості
    for (let i = 0; i < length; i++) {
        result += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return result;
};

  const randomEmail = `testuser${Math.floor(Math.random() * 10000)}@example.com`;
  const validPassword = 'Password1';
  const uniqueName = generateUniqueString('Name', 5); // Ім’я з 5 випадкових літер
  const uniqueLastName = generateUniqueString('Last', 5); // Прізвище з 5 випадкових літер

  beforeEach(() => {
    
  
    cy.visit('https://qauto.forstudy.space/', {
        auth: {
            username: 'guest',
            password: 'welcome2qauto'
        }
    });

    // Перевіряємо, що сторінка завантажилася успішно
    cy.url().should('eq', 'https://qauto.forstudy.space/');

});

it('Registers a user with valid data', () => {
  cy.get('button.btn.btn-outline-white.header_signin').click();
  cy.get('button.btn.btn-link').contains('Registration').click();
  cy.get('input[name="name"]').type(uniqueName);
  cy.get('input[name="lastName"]').type(uniqueLastName);
  cy.get('input[name="email"]').type(randomEmail);
  cy.get('input[name="password"]').type(validPassword, { sensitive: true });
  cy.get('input[name="repeatPassword"]').type(validPassword, { sensitive: true });
  cy.get('button.btn.btn-primary').contains('Register').should('not.be.disabled').click();

  // Assert successful registration
 // Перевірка, що користувач перенаправлений на сторінку Garage
 cy.url().should('include', '/panel/garage');

 // Перевірка наявності кнопки "Add car" на сторінці Garage
 cy.get('button').contains('Add car').should('be.visible');

 // Перевірка наявності тексту про відсутність машин
 cy.contains("You don’t have any cars in your garage").should('be.visible');
});

it('Shows errors for empty fields', () => {
  cy.get('button.btn.btn-outline-white.header_signin').click();
  cy.get('button.btn.btn-link').contains('Registration').click();

     // Проверяем поле "Name"
     cy.get('input[name="name"]').click(); // Клик по полю
     cy.get('input[name="lastName"]').click(); // Переход на другое поле
     cy.get('div.form-group div.invalid-feedback p') 
         .should('be.visible')
         .and('contain', 'Name required'); // Проверяем текст ошибки

     // Проверяем поле "Last name"
cy.get('input[name="lastName"]').click(); // Клик по полю "Last name"
cy.get('input[name="email"]').click(); // Переход на поле "Email"
cy.get('div.invalid-feedback p') 
    .should('be.visible')
    .and('contain', 'Last name required');

// Проверяем поле "Email"
cy.get('input[name="email"]').click(); // Клик по полю "Email"
cy.get('input[name="password"]').click(); // Переход на поле "Password"
cy.get('div.invalid-feedback p') // Точный селектор для ошибки "Email required"
    .should('be.visible')
    .and('contain', 'Email required');

// Проверяем поле "Password"
cy.get('input[name="password"]').click(); // Клик по полю "Password"
cy.get('input[name="repeatPassword"]').click(); // Переход на поле "Re-enter password"
cy.get('div.invalid-feedback p') 
    .should('be.visible')
    .and('contain', 'Password required');

// Проверяем поле "Re-enter password"
cy.get('input[name="repeatPassword"]').click(); // Клик по полю "Re-enter password"
cy.get('input[name="email').click(); 
cy.get('div.invalid-feedback p') 
    .should('be.visible')
    .and('contain', 'Re-enter password required');    
    
});

it('Проверяет длину и сложность пароля', () => {
  cy.get('button.btn.btn-outline-white.header_signin').click();
  cy.get('button.btn.btn-link').contains('Registration').click();


  cy.get('input[name="name"]').type('John');
    cy.get('input[name="lastName"]').type('Doe');
    cy.get('input[name="email"]').type(randomEmail);

    // Вводим некорректный пароль
    cy.get('input[name="password"]').type('123', { sensitive: true });
    cy.get('input[name="repeatPassword"]').type('123', { sensitive: true });
    cy.get('button.btn.btn-primary').contains('Register').should('be.disabled');

    // Проверяем сообщение об ошибке для пароля
    cy.get('input[name="password"]')
        .parent()
        .find('div.invalid-feedback p')
        .should(
            'contain',
            'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'
        );
});

  
})