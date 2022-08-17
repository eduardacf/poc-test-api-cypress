/// <reference types="cypress" />
Cypress.Commands.add('getBookId', (id) => {
    cy.request({
        method: 'GET',
        url: `/v1/Books/${id}`,
        failOnStatusCode: false
    })
})

