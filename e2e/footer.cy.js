describe('Visualización del footer', () => {
    
    beforeEach(() => {
        cy.viewport(1200, 800) 
        cy.visit('https://classlodge.vercel.app/')
    });

    it('Se visualiza el logo en el footer de la web y redirecciona al home al hacer clic en él', () => {
        // Comprobar que se muestra el logo
        cy.get('footer').should('be.visible');
        cy.get('footer').find('img[alt="logo"]').should('be.visible');
        cy.get('footer').find('a > .hidden > img[alt="logo"]').click();
        cy.location('href').should('eq', 'https://classlodge.vercel.app/');
    });

    it('Se visualizan los link de navegación en el footer', () => {
        // Comprobar que se muestran los enlace
        cy.get('footer').should( 'be.visible');
        cy.get('ul' ).find('li').its('length').should('be.gt', 0);
        cy.get('footer ul li').should(($li) => {
            expect($li).to.contain('Cursos');
            expect($li).to.contain('Categorías');
            expect($li).to.contain('Dicta tu Curso');
        });
    });

    it('Se visualizan los íconos de las redes sociales en el footer', () => {
        cy.get('footer').should( 'be.visible').find('img[alt="twitter"], img[alt="instagram"], img[alt="youtube"], img[alt="discord"]');
    });

    it('Se visualiza el copyrigth correctamente en el footer', () => {
        cy.get('footer p').should('have.text', 'Copyright © 2024 - ClassLodge ');  
    });       
})