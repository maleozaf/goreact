describe('Sign up for Student', function (){
    
    it.only('Creating Account', function () {
        cy.visit('https://dev.goreact.com/join/def8009c-bd71-4da2-b888-187d6bdcbc12')

        cy.get('[data-cy=create-account]')
            .should('have.attr', 'data-cy', 'create-account')
            .click()
        cy.xpath('//span[text()="Driving 101"]').should('be.visible')
        cy.xpath('//button[text()="Continue"]').click()

        //create account form
        cy.get('[data-cy=signup-form-firstname]')
            .type('Donna')
        cy.get('[data-cy=signup-form-lastname]')
            .type('Lyn')
        cy.get('[data-cy=signup-form-email]')
            .type('donnalyn5@gmail.com')
        cy.get('[data-cy=signup-form-password]')
            .type('12345Abc@')
        cy.get('[data-cy=signup-form-password-confirm]')
            .type('12345Abc@')
        cy.get('[data-cy=signup-form-terms-agree]').click()
        cy.get('[data-cy=signup-form-submit]').click()
        cy.xpath(`//label[text()="I am age 13 or older and consent to the updated User Terms and Privacy Policy."]`).click()
        cy.xpath('//button[text()="Continue"]').click()
        cy.xpath('//span[text()="Donna Lyn"]').should('be.visible')
    })
})