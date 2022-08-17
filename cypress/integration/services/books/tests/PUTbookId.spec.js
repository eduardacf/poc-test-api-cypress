/// <reference types="cypress" />
describe('Post Books', () => {
    it('Adicionar um Livro.', () => {
        cy.postBooks().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.bookingid).to.be.not.null
        })
    })
})

