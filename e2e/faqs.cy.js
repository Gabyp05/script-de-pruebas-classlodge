describe('Preguntas frecuentes', () => {

    beforeEach(() => {
        cy.viewport(1200, 800) 
        cy.visit('https://classlodge.vercel.app/')
    });

    it('Se visualiza la sección de preguntas frecuentes', () => {
        cy.get('section.flex.justify-center.items-center.flex-col.gap-5.p-5.space-y-5.my-10')
        .should('exist');

        cy.get('section.flex.justify-center.items-center.flex-col.gap-5.p-5.space-y-5.my-10')
        .find('h2')
        .contains('Preguntas Frecuentes');

        cy.get('section.flex.justify-center.items-center.flex-col.gap-5.p-5.space-y-5.my-10')
        .find('p')
        .contains('Preguntas generales referentes a nuestro sistema y medios de pagos.');
        
      
    });

    it('Se despliega cada una de las FAQs al hacer clic sobre ellas', () => {
        cy.get('div[aria-label="Que medios de pago aceptan?"]').should('have.length', 5);
        cy.get('div[aria-label="Que medios de pago aceptan?"] button').each(($button) => {
            cy.wrap($button).click(); // Hacemos clic en cada botón
            cy.get('div[aria-label="Que medios de pago aceptan?"] + hr + div').should('be.visible'); // Verificamos que el siguiente div (que contiene la respuesta) esté visible después de hacer clic en el botón de la pregunta
        });
          
    });

})