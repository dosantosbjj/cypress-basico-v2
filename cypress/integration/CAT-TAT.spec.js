//<reference types="Cypress/>"

describe('abrir o Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() => {
        cy.visit('../../src/index.html')
    })

    it('verifica o título da aplicação', () => {
        cy.title().should('eq','Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o form', () => {
        cy.register('Lucas','Santos','dosantosbjj@gmail.com','TESTE DE TEXTO')  
        cy.get('.success').should('be.visible')     
    })

    //exercicio 2
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
        cy.register('Lucas','Santos','emaildeteste.com','TESTE DE TEXTO')
        cy.get('.error').should('be.visible')
    });

    //exercicio 3
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
        cy.register('Lucas','Santos','emaildeteste.com','TESTE DE TEXTO')
        cy.get('#phone-checkbox').check()
        cy.get('#phone').type(" ")
        cy.get('.error').should('be.visible')
    });
    //exercicio 4
    it('valida que valor não numérico não preenche telefone', () => {
        cy.get('#phone').type('ASDWAE').should('not.have.text','ASDWAE')        
    })

    //exercicio 5

    it('preenche e limpa os campos ', () => {
        cy.get('#firstName').type('Johnny').should('have.value','Johnny').clear().should('have.value','')
        cy.get('#lastName').type('Bravo').should('have.value','Bravo').clear().should('have.value','')
        cy.get('#email').type('johnny@bravo.com').should('have.value','johnny@bravo.com').clear().should('have.value','')
        cy.get('#phone').type('99990919').should('have.value','99990919').clear().should('have.value','')   
    });

    //exercicio 6

    it('exibe erro ao enviar form sem preencher os campos obrigatorios', () => {
        cy.contains('button','Enviar').click();
        cy.get('.error').should('be.visible')
    });

    it('seleciona YouTube pelo texto', () => {
        cy.get('select').select('YouTube').should('have.value','youtube')
    })

    it('seleciona mentoria pelo valor', () => {
        cy.get('select').select('mentoria').should('have.value','mentoria')
    })

    it('seleciona blog pelo indice', () => {
        cy.get('select').select(1).should('have.value','blog')
    })

    it('marca o atendimento feedback', () => {
        cy.get('input[type="radio"]').check('ajuda').should('have.value','ajuda')
    });

    it('marca todos atendimentos e checa', () => {
        cy.get('input[type="radio"]')
        .should('have.length', 3)
        .each(($radio) => {
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
        })
    })

    it('marca todos e desmarca último', () => {
        cy.get('input[type="checkbox')
            .check().should('be.checked')
            .last()
            .uncheck()
            .should('not.be.checked')
    });

    it('seleciona um arquivo da pasta fixtures', () => {
        cy.get('input[type="file"]')
            .selectFile('cypress/fixtures/example.json')
            .then(input => {
                console.log(input)
                expect(input[0].files[0].name).equals('example.json')
            })
    })
    it('arrasta um arquivo da pasta fixtures', () => {
        cy.get('input[type="file"]')
            .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
            .then(input => {
                console.log(input)
                expect(input[0].files[0].name).equals('example.json')
            })
    })

    it('seleciona um arquivo utilizando fixture com alias', () => {
        cy.fixture('example.json').as('sampleFile')
        cy.get('input[type="file"]').selectFile('@sampleFile')
    });

    it('checa se politica de privacidade abre em outra pagina', () => {
        cy.get('a').should('have.attr','target','_blank')
    });
    it('acessa a página removendo o target e clicando no link', () => {
        cy.get('a').invoke('removeAttr','target').click()
        cy.get('#title').should('have.text','CAC TAT - Política de privacidade')
    });
})