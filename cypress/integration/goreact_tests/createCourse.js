describe('Course Creation', function (){
    beforeEach(() => {
        cy.visit('https://dev.goreact.com/')
    })

    it('Able to create a course successfully', function () {
        cy.get('[data-cy=login-email-field]')
            .type('jhondoe6@gmail.com')
        cy.get('[data-cy=login-password-field]')
            .type('12345Abc@')
        cy.xpath('//span[text()="Log In"]').click()
        cy.wait(5000)

        cy.xpath('//span[text()="Courses"]').click()
        cy.xpath('//span[text()="Create Course"]').click()
        cy.xpath('//span[text()="Course name"]/following::input[1]')
            .type('Driving 101')
        cy.get('[aria-label="Create Course"').click()
        cy.wait(5000)
        cy.xpath('//span[text()="Courses"]').click()
        cy.xpath('//div[text()="Driving 101"]')
            .should('be.visible')
    })

    it.only('Create Invitation Link', function () {
        cy.visit('https://dev.goreact.com/')
        cy.get('[data-cy=login-email-field]')
            .type('jhondoe6@gmail.com')
        cy.get('[data-cy=login-password-field]')
            .type('12345Abc@')
        cy.xpath('//span[text()="Log In"]').click()
        cy.wait(10000)

        cy.xpath('//span[text()="Courses"]').click()
        cy.xpath('//div[text()="Driving 101"]')
            .should('be.visible')
            .click()
        cy.xpath('//span[text()="Driving 101"]/following::i').click()
        cy.xpath('//a[text()="Invite Users"]/following::a[16]').click()

        cy.xpath('//i[@class="ficon-app-copy ng-scope"]').should('be.visible')

    })
})