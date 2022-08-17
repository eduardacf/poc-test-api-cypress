/// <reference types="cypress" />
Cypress.Commands.add('getAllBooks', () => {
    cy.request({
        method: 'GET',
        url: '/v1/Books',
        failOnStatusCode: false
    })
})

