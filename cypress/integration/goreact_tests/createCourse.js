describe('Course Creation', function (){

    it('Able to create a course successfully', function () {
        cy.visit('https://dev.goreact.com/')
        cy.get('[data-cy=login-email-field]')
            .type('jhondoe11@gmail.com')
        cy.get('[data-cy=login-password-field]')
            .type('12345Abc@')
        cy.xpath('//span[text()="Log In"]').click()
        cy.wait(10000)

        cy.xpath('//span[text()="Courses"]').click()
        cy.xpath('//span[text()="Create Course"]').click()
        cy.xpath('//span[text()="Course name"]/following::input[1]')
            .type('Driving 101')
        cy.get('[aria-label="Create Course"').click()
        cy.wait(7000)
        cy.xpath('//button[text()="Close"]').click()
        cy.xpath('//span[text()="Courses"]').click()
        cy.xpath('//div[text()="Driving 101"]')
            .should('be.visible')
    })

    it('Provide Invitation Link', function () {
        cy.visit('https://dev.goreact.com/')
        cy.get('[data-cy=login-email-field]')
            .type('jhondoe11@gmail.com')
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