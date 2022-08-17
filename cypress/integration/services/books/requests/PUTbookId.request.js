/// <reference types="cypress" />
const payloadAddBooks = require('../payloads/add-book.payload.json')
payloadAddBooks.title = 'Alterando Titulo do Livro';
Cypress.Commands.add('putBook', (id) => {
    cy.request({
        method: 'PUT',
        url: `/v1/Books/${id}`,
        headers: {
            accept: "application/json"
        },
        body: payloadAddBooks,
        failOnStatusCode: false
    })
})

