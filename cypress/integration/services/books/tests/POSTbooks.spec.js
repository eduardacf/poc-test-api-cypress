/// <reference types="cypress" />
describe('Post Books', () => {
    it('Adicionar um Livro.', () => {
        cy.postBooks().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.bookingid).to.be.not.null
            expect(response.body.id).to.eq(1)
            expect(response.body.title).to.eq('Book 1')
            expect(response.body.description).to.eq('Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.\n')
            expect(response.body.pageCount).to.eq(100)
            expect(response.body.publishDate).to.eq('2022-08-15T19:41:57.550045+00:00')

        })
    })
})

