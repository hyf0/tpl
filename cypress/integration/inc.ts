
describe('My First Test', () => {
  it('Inc', () => {
    cy.visit('http://localhost:3015/')
    cy.contains('count is').click()
    cy.contains('count is').should('contain', 'count is: 1')
  })
})