describe('Cursos Destacados', () => {

    beforeEach(() => {
        cy.viewport(1200, 800) 
        cy.visit('https://classlodge.vercel.app/')
    });

    it('Se visualizan 3 tarjetas de cursos destacados', () => {
        cy.get('div > h3').contains('Cursos').should('be.visible');
        cy.get('div > p').contains('Nuestros cursos destacados').should('be.visible');
        
        cy.get('div.flex.flex-wrap.mt-14.gap-10.items-center.justify-center.xl\\:justify-normal.p-4')
        .find('div.flex.flex-col.relative.overflow-hidden.height-auto.box-border.outline-none')
        .each(($el, index) => {
        if (index < 3) {
            cy.wrap($el).should('exist');
        }
    });

    });

    it('Direcciona a la página de Catálogo de cursos al presionar el botón "Ver más"', () => {
        
        cy.get('button').contains('Ver más')
        .should('be.visible') //Verificamos que se muestra el botón
        .click(); //Hacemos clic en el botón
        cy.location('href').should('eq', 'https://classlodge.vercel.app/catalogo'); //Deberiamos estar en la pag catalogo
        
    });

})