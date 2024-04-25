describe('Cabecera de la web', () => {

    beforeEach(() => {
        cy.viewport(1200, 800) 
        cy.visit('https://classlodge.vercel.app/')
    });

    it('Se visualiza el logo en la cabecera de la web y redirecciona al home al hacer clic en él', () => {
      
        cy.get('nav').should('be.visible');
        cy.get('img[alt="logo"]').should('be.visible');
        cy.get('a > img[alt="logo"]').click();
        cy.location('href').should('eq', 'https://classlodge.vercel.app/');
    });

    it('Se visualiza el link catálogo y direcciona a la página catálogo', () => {
    
        cy.get('nav').should('be.visible');
        cy.get('nav').find('ul > li > a').contains('Catálogo').click();
        cy.location('href').should('include', '/catalogo');
    });

    it('Se abre el modal de login al presionar el botón "Ingresa"', () => {

        const modalId = '\\:R13da\\:';
        
        cy.get('nav').should('be.visible');
        cy.get('nav').find('li > button').contains('Ingresa').click();
        cy.get(`section[id="${modalId}"]`).should('be.visible');
    })

    it('Direcciona a la página de registro al presionar el botón "Registrate"', () => {
        
        cy.get('nav').should('be.visible');
        cy.get('nav').find('li > a').contains('Registrate').click();
        cy.url().should('include', '/registro'); 
    })
   
})