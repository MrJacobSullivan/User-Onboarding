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

  describe('Filling out elements', () => {
    it('should start out with the submit button disabled', () => {
      submitButton().should('be.disabled')
    })

    it('should allow for input', () => {
      nameInput().should('have.value', '').type('Test').should('have.value', 'Test')
      emailInput()
        .should('have.value', '')
        .type('test@email.com')
        .should('have.value', 'test@email.com')
      passwordInput().should('have.value', '').type('test').should('have.value', 'test')
      tosInput().should('not.be.checked').click().should('be.checked')
    })
  })
})
