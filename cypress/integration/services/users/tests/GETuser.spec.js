import userSchema from '../contracts/users.contracts'
/// <reference types="cypress" />
describe('Get User', () => {
    it('Validar o contrato da listagem de Usuários.', () => {
        cy.getAllUsers().then((response => {
            return userSchema.validateAsync(response.body[0])}))
    })
})

