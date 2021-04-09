describe('Sign up for Student', function (){
    
    it.only('Creating Account', function () {
        //manually change the invitation link here
        cy.visit('https://dev.goreact.com/join/c5206e32-0eaf-46f6-865d-ba429bd5bbc5')

        cy.get('[data-cy=create-account]')
            .should('have.attr', 'data-cy', 'create-account')
            .click()
        cy.wait(3000)
        cy.xpath('//span[text()="Driving 101"]').should('be.visible')
        cy.xpath('//button[text()="Continue"]').click()

        //create account form
        cy.get('[data-cy=signup-form-firstname]')
            .type('Donna')
        cy.get('[data-cy=signup-form-lastname]')
            .type('Lyn')
        cy.get('[data-cy=signup-form-email]')
            .type('donnalyn7@gmail.com')
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