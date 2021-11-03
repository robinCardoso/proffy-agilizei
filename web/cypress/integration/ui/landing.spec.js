/// <reference types="cypress"/>
const larguras = [1200, 500]

larguras.forEach(largura => {
    context(`Landing page: ${largura}px`, () => {

        beforeEach(() => {
            cy.visit('/')
            // cy.viewport('largura', 'altura')
            cy.viewport(largura, 900)

            cy.log('Largura: ', largura)
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
})