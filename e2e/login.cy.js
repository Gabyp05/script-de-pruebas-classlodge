describe('Iniciar sesión', () => {

    beforeEach(() => {
        cy.viewport(1200, 800) 
        cy.visit('https://classlodge.vercel.app/')

        const modalId = '\\:R13da\\:';
    
        cy.get('nav').should('be.visible');
        cy.get('li > button').contains('Ingresa').click();
        cy.get(`section[id="${modalId}"]`).should('be.visible');
    });

    it('Se inicia sesión con usuario Estudiante', () => {
        const modalId = '\\:R13da\\:';
        // Acceder a las credenciales desde la fixture
        cy.fixture('credentials').then((credentials) => {

            // Rellenamos los campos de ingreso
            cy.get(`section[id="${modalId}"]`)
            .find('input[id="emailUser"]')  
            .type(credentials.estudiante.email);  

            cy.get(`section[id="${modalId}"]`)
            .find('input[id="password"]')  
            .type(credentials.estudiante.password);  

            // Hacemos clic en el botón Ingresar
            cy.get('div > button').contains('Ingresar').click();
            cy.wait(12000); // Espera 6 segundos
            cy.get('nav').should('be.visible');
            cy.get('nav').find('li > a').contains('Mi Perfil');

        });
  
    });

    it('Se inicia sesión con usuario Tutor', () => {
        const modalId = '\\:R13da\\:';
        // Acceder a las credenciales desde la fixture
        cy.fixture('credentials').then((credentials) => {
            
            // Rellenamos los campos de ingreso
            cy.get(`section[id="${modalId}"]`)
            .find('input[id="emailUser"]')  
            .type(credentials.tutor.email);  

            cy.get(`section[id="${modalId}"]`)
            .find('input[id="password"]')  
            .type(credentials.tutor.password);  

            // Hacemos clic en el botón Ingresar
            cy.get('div > button').contains('Ingresar').click();
            cy.wait(12000); // Espera 6 segundos
            cy.get('nav').should('be.visible');
            cy.get('nav').find('li > a').contains('Mi Perfil');
        });
  
    });

})


  