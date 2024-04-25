describe('Visualización del hero', () => {
    
    beforeEach(() => {
        cy.viewport(1200, 800) 
        cy.visit('https://classlodge.vercel.app/')
    });

    it('Se visualiza el texto y la imagen del hero', () => {
        cy.get('div > h1').contains('Adquirí nuevas habilidades sin salir de tu casa').should('be.visible');
        cy.get('img[alt="hero"]').should('be.visible');
    });

    it('Se visualiza la barra de búsqueda', () => {
        cy.get('h1').contains('¿Qué quieres aprender hoy?').should('be.visible');
        cy.get('input').invoke('attr', 'placeholder').should('contain', 'Busca un curso')
    });
      
})