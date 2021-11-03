/// <reference types="cypress"/>
/// <reference types="@bahmutov/cy-api" />


context('Connects endPoint', () => {
    it('GET - Obter total de conexões realizadas', () => {
        /* 
        http://localhost:3333/connections
        GET
        200 
        https://github.com/bahmutov/cy-api
        */
       cy.api({
           method: 'GET',
           url: `${Cypress.config().apiUrl}/connections`
       }).then(response => {
           console.log(response)
           expect(response.status).to.eq(200)
           expect(response.duration).lessThan(20)
           expect(response.duration).lt(20)

           expect(response.body)
           .to.have.property('total')
           .to.be.a('number')
           .greaterThan(5)

           expect(response.body.total)
           .an('number')
           .satisfy(totalValue => { return totalValue >= 5 })

           //Content-Type: application/json; charset=utf-8

           expect( response.headers )
           .to.have.property('content-type')
           .an('string')
           .equal('application/json; charset=utf-8')
       });
    });
});