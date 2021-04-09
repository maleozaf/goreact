describe('Instructor Log In', function (){

    beforeEach(() => {
        cy.visit('https://dev.goreact.com/').contains('form', 'Email')
    })

    it('Correct Credentials: Instructor should be able to log in', function () {
        cy.get('[data-cy=login-email-field]')
            .type('jhondoe11@gmail.com')
        cy.get('[data-cy=login-password-field]')
            .type('12345Abc@')

        cy.xpath('//span[text()="Log In"]').click()
        cy.wait(10000)
        cy.xpath('//span[text()="Welcome to GoReact!"]').should('be.visible')
    })

    it('Incorrect Credentials: Instructor should not be able to log in', function () {
        cy.get('[data-cy=login-email-field]')
            .type('jhondoe@gmail.com')
        cy.get('[data-cy=login-password-field]')
            .type('12345')

        cy.xpath('//span[text()="Log In"]').click()
        cy.wait(5000)
        cy.xpath('//p[text()="Check username and password"]').should('be.visible')

    })
})