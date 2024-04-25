describe('Categorías', () => {

    beforeEach(() => {
        cy.viewport(1200, 800) 
        cy.visit('https://classlodge.vercel.app/')
    });

    it('Se visualizan 8 tarjetas de categorías con sus titulos', () => {
        cy.get('h1').contains('Categorías').should('be.visible');
        cy.get('p').contains('Explora los campos de aprendizaje mas demandados').should('be.visible');
        
        cy.get('div.flex.justify-center.flex-wrap.max-w-\\[1128px\\].mx-auto')
        .find('button')
        .should('have.length', 8);
        //Verificamos que esté presente los titulos en cada tarjeta
        cy.get('button:contains("Desarrollo Web")').should('exist');
        cy.get('button:contains("Programación")').should('exist');
        cy.get('button:contains("Diseño Gráfico")').should('exist');
        cy.get('button:contains("Marketing Digital")').should('exist');
        cy.get('button:contains("Finanzas Personales")').should('exist');
        cy.get('button:contains("Idiomas")').should('exist');
        cy.get('button:contains("Fotografía")').should('exist');
        cy.get('button:contains("Salud y Bienestar")').should('exist');
    });
})