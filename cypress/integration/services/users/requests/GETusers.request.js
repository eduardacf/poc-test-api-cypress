/// <reference types="cypress" />
Cypress.Commands.add('getAllUsers', () => {
    cy.request({
        method: 'GET',
        url: '/v1/Users',
        failOnStatusCode: false
    })
})

