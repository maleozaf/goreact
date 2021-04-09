describe('Instructor Log In', function (){

    it('Correct Credentials: Student should be able to log in', function () {
        cy.visit('https://dev.goreact.com/')
        cy.get('[data-cy=login-email-field]')
            .type('donnalyn8@gmail.com')
        cy.get('[data-cy=login-password-field]')
            .type('12345Abc@')

        cy.xpath('//span[text()="Log In"]').click()
        cy.wait(10000)
        cy.xpath('//div[text()="Driving 101"]').should('be.visible')
    })

    it('Incorrect Credentials: Student should not be able to log in', function () {
        cy.visit('https://dev.goreact.com/')
        cy.get('[data-cy=login-email-field]')
            .type('donna@gmail.com')
        cy.get('[data-cy=login-password-field]')
            .type('12345')

        cy.xpath('//span[text()="Log In"]').click()
        cy.wait(10000)
        cy.xpath('//p[text()="Check username and password"]').should('be.visible')

    })
})