describe('Header and Footer Buttons/Links', () => {
  beforeEach(() => {
    
      // Відкриваємо сайт із використанням Basic Auth
      cy.visit('https://qauto.forstudy.space/', {
          auth: {
              username: 'guest',
              password: 'welcome2qauto'
          }
      });

      // Перевіряємо, що сторінка завантажилася успішно
      cy.url().should('eq', 'https://qauto.forstudy.space/');

});

it('Find all buttons in the header', () => {
  // Знаходження всіх кнопок в хедері
  cy.get('header').within(() => {
      // Знаходження всіх елементів кнопок
      cy.get('button').each((button) => {
          cy.wrap(button).should('be.visible');
      });
      // Знаходження всіх посилань у хедері
      cy.get('a').each((link) => {
          cy.wrap(link).should('be.visible').and('have.attr', 'href');
      });
  });
});

it('Should find all social media links in the footer', () => {

  cy.scrollTo('bottom');
  // Проверяем наличие секции футера
  cy.get('footer').should('be.visible');

  // Проверяем все социальные кнопки
  cy.get('div.contacts_socials.socials a') // Ищем все ссылки внутри div с классами contacts_socials и socials
    .each((button) => {
      cy.wrap(button)
        .should('be.visible') // Кнопка должна быть видимой
        .and('have.attr', 'href') // Ссылка должна существовать
        .and('match', /https?:\/\//); // Ссылка должна быть корректной (начинаться с http/https)
    });
  
 // Проверяем все ссылки в секции контактов
 cy.get('div.col-md-6 a') // Ищем все ссылки внутри div с классом col-md-6
 .each((link) => {
   cy.wrap(link)
     .should('be.visible') // Ссылка должна быть видимой
     .and('have.attr', 'href') // Ссылка должна содержать атрибут href
     .then((href) => {
       if (href.startsWith('mailto:')) {
         // Если ссылка mailto, проверяем, что это корректный email
         expect(href).to.match(/^mailto:.+@.+\..+$/);
       } else {
         // Если ссылка не mailto, она должна быть корректной (http/https)
         expect(href).to.match(/^https?:\/\//);
       }
     });
 });
});
})