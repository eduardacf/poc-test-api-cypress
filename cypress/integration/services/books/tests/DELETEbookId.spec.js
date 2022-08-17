/// <reference types="cypress" />
describe('Delete Book', () => {
    it('Excluir um Livro.', () => {
        cy.deleteBook(1).should((response) => {
            expect(response.status).to.eq(200)
        })
    })
})

