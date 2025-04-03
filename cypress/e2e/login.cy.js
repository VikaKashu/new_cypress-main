describe('Aвтотесты для формы логина и пароля', function () {

    it('Проверка на позитивный кейс авторизации', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.get('#message').should('be.visible');
       cy.get('#messageHeader').contains('Авторизация прошла успешно'); 
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
       })


    it(' Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#message').should('be.visible');
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
       })


    it(' Проверка на негативный кейс авторизации 1', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('Loveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#message').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })


    it(' Проверка на негативный кейс авторизации 2', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@polnikov.ru');
        cy.get('#pass').type('ILoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#message').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })


    it(' Проверка на негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('ILoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#message').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })


    it(' Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('ILoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#message').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

})