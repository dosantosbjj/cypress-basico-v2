it.only('testa página de política de privacidade', () => {
    cy.visit('../../src/privacy.html')
    cy.get('#title').should('have.text','CAC TAT - Política de privacidade')
});