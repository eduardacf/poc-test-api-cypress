import bookSchema from '../contracts/books.contracts'

/// <reference types="cypress" />
describe('Get Book ID', () => {

    it('Validar o contrato da listagem de Livro por ID.', () => {
        cy.getBookId(1).then((response => {
            return bookSchema.validateAsync(response.body[0])
        }))
    })
    it('Buscar Livro pelo ID.', () => {
        cy.getBookId(1).then((response => {
            expect(response.status).to.eq(200)
            expect(response.body.id).to.eq(1)
        }))
    })
})

