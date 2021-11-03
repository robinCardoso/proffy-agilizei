/// <reference types="cypress"/>
/* npx cypress open --config viewportWidth=1090 */

/* 
Plugin para verificar cobertura de código - quantas linhas foram efetivamente executadas ( breakPoints)
instrumentalização -> npm install -D @cypress/instrument-cra = https://github.com/cypress-io/instrument-cra
code-coverage      -> npm install -D @cypress/code-coverage = https://github.com/cypress-io/code-coverage
nyc                -> nyc = https://github.com/istanbuljs/nyc

1ª Subir aplicação instrumentalizada - npm run start:inst
2º Executar somente os testes de UI - npx cypress run --spec 'cypress/integration/ui/**'
( --spec identifica todos os arquivos com essa nomenclatura )
(** executa todos os arquivos dentro da pasta UI )

3º Verificar a cobertura em HTML com o nyc - npx nyc report --reporter=html

IMPORTANTE:
Cypress Dashboard - não tem integração continua
Serviçoes com integração continua - Github actian

*/

context(`Landing page`, () => {

    beforeEach(() => {
        cy.visit('/')
    });

    it('Navegar para o cadastro de aulas', () => {
        cy.get('div a.study').click()
        cy.url().should('contain', 'study')
    });

    it('Navegar para pesquisa de professores', () => {
        cy.get('div a.give-classes').click()
        cy.url().should('contain', 'give-classes')
    });
});