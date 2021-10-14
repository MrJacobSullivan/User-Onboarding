describe('Onboarding App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  const nameInput = () => cy.get('input[name=name]')
  const emailInput = () => cy.get('input[name=email]')
  const passwordInput = () => cy.get('input[name=password]')
  const tosInput = () => cy.get('input[name=tos]')
  const submitButton = () => cy.get('button')

  it('should show the proper elements', () => {
    nameInput().should('exist')
    emailInput().should('exist')
    passwordInput().should('exist')
    tosInput().should('exist')
    submitButton().should('exist')
  })
})
