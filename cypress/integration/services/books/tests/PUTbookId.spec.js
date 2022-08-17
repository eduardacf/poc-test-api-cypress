/// <reference types="cypress" />
describe('Put Book', () => {
    it('Alterar o titulo de um Livro pelo ID.', () => {
        cy.putBook(1).should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.id).to.be.not.null
            expect(response.body.id).to.eq(1)
            expect(response.body.title).to.eq('Alterando Titulo do Livro')
        })
    })

    it('Tentar alterar um Livro que o ID é inválido', () => {
        cy.putBook(5000000000000000).should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.errors.id[0]).to.eq("The value '5000000000000000' is not valid.")

        })
    })
})

