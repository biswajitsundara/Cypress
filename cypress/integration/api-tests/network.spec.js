/// <reference types="cypress" />

describe('Real API Response', () => {

    it.skip('Printing the API response', () => {
        cy.visit('https://jsonplaceholder.typicode.com/');

        cy.intercept({
            path: '/posts',
        }).as('posts');

        cy.get('table:nth-of-type(1) a[href="/posts"]').click();
        cy.wait('@posts').then((respObj) => {
            cy.log(JSON.stringify(respObj));
            expect(respObj.response.body).to.have.length(100);
        })
    })


    it.skip('Mocking the API response', () => {
        cy.visit('https://jsonplaceholder.typicode.com/');

        cy.intercept(
            'GET',
            '/posts',
            {
                totalpost: 5,
                name: "Biswajit Sundara"
            }
        ).as('posts');

        cy.get('table:nth-of-type(1) a[href="/posts"]').click();
        cy.wait('@posts').then((respObj) => {
            cy.log(JSON.stringify(respObj.response.body));
        })
    })


    it('Mocking the API response with fixture', () => {
        cy.visit('https://jsonplaceholder.typicode.com/');

        cy.intercept(
            'GET',
            '/posts',
            {fixture:'createuser.json'}
        ).as('posts');

        cy.get('table:nth-of-type(1) a[href="/posts"]').click();
        cy.wait('@posts').then((respObj) => {
            cy.log(JSON.stringify(respObj.response.body));
        })
    })

})