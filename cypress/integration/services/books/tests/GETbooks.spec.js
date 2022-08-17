import bookSchema from '../contracts/books.contracts'
/// <reference types="cypress" />
describe('Get Book', () => {
    it('Validar o contrato da listagem de Livros.', () => {
        cy.getAllBooks().then((response => {
            return bookSchema.validateAsync(response.body[0])}))
    })
})

