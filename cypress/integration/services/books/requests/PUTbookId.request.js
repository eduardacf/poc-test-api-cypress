/// <reference types="cypress" />
const payloadAddBooks = require('../payloads/add-book.payload.json')
Cypress.Commands.add('postBooks', () => {
    cy.request({
        method: 'POST',
        url: '/v1/Books',
        headers: {
            accept: "application/json"
        },
        body: payloadAddBooks.title.valueOf("Alterando o titulo"),
        failOnStatusCode: false
    })
})

