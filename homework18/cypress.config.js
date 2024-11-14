const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    e2e: {
    //  baseUrl: 'http://localhost:3000', // Вкажіть ваш базовий URL
      viewportWidth: 1280,
      viewportHeight: 720,
      defaultCommandTimeout: 8000,
      video: false, // Вимкнути запис відео для швидших тестів
      retries: {
        runMode: 2, // Повторювати тести 2 рази при запуску через CLI
        openMode: 0, // Не повторювати тести при запуску в Cypress GUI
      },
    },
  },
});
