/// <reference types="cypress"/>
/// <reference types="@bahmutov/cy-api" />
/* 
Request URL: http://localhost:3333/classes
Request Method: POST
Status Code: 201 Created 
*/

context('Classes endpoint', () => {
    it('POST - Cadastrar um novo professor', () => {
        cy.api({
            method: 'POST',
            url: `${Cypress.config().apiUrl}/classes`,
            body: {
                "name": "robson cardoso",
                "avatar": "https://pickaface.net/gallery/avatar/unr_japonesfake_200707_2328_u0ot2.png",
                "whatsapp": "4999999999",
                "bio": "Testando a aplicação",
                "subject": "Química",
                "cost": 10,
                "schedule": [
                    {
                        "week_day": "1",
                        "from": "08:00",
                        "to": "11:00"
                    }
                ]
            }
        }).then(response => {
            console.log(response);
            expect(response.status).to.be.eq(201)
        })
    });
});