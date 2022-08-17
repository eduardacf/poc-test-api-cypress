/// <reference types="cypress" />
Cypress.Commands.add('deleteBook', (id) => {
    cy.request({
        method: 'DELETE',
        url: `/v1/Books/${id}`,
        headers: {
            accept: "application/json"
        },
        failOnStatusCode: false
    })
})

