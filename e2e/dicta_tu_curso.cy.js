describe('Dicta tu Curso', () => {

    beforeEach(() => {
        cy.viewport(1200, 800) 
        cy.visit('https://classlodge.vercel.app/')
    });

    it('Se visualiza la sección dicta tu curso', () => {
        cy.get('div.flex.align-middle.min-h-96.my-24')
        .find('img[alt="dicta tu curso"]').should('be.visible');

        cy.get('div.flex.align-middle.min-h-96.my-24').find('div.flex').contains('Dicta tu Curso').should('be.visible');

        cy.get('div.flex.align-middle.min-h-96.my-24').find('span').contains('Hacelo como mas te guste y compartí tus conocimientos con una comunidad de mas de 2000 estudiantes, profesionales y entuciastas.');

        cy.get('button:contains("Comenzá Ahora")').should('exist').click();
        cy.location('href').should('eq', 'https://classlodge.vercel.app/dictaTuCurso');

    });
})