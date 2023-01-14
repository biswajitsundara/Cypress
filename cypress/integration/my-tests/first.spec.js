/// <reference types="cypress" />

describe('basic automation suite', () => {

    it('basic user login test', () => {
         //cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account');
        //cy.get('#email').type('biswajit');
        //  cy.get('#passwd').type('sund');
        //  cy.get('#SubmitLogin').click();

        cy.visit('https://bankofbraavos.github.io/')
        cy.get('[name="login"]').type('user');
        cy.get('[type="password"]').type('test');
        cy.get('[type="submit"]').click();
        cy.wait(5000);
        cy.get('h1').should('have.text','Customers');

    })
})