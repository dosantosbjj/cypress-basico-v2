Cypress._.times(5, () => { //FUNÇÃO DA LIB LODASH PARA REPETIR A FUNÇÃO X VEZES 
    it('testa página de política de privacidade', () => {
        cy.visit('../../src/privacy.html')
        cy.get('#title').should('have.text','CAC TAT - Política de privacidade')
    });
})