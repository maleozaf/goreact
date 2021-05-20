import {pageElementForgotPassword, pageElementLoginPage} from '../fixtures/page-elements/loginPage'
import {pageElementCreateAccount, pageElementsAccountSetup} from '../fixtures/page-elements/signupPage'
import {} from '../fixtures/page-elements/instructorDashboardPage'

Cypress.Commands.add('goToLoginPage', () => {
    cy.visit(Cypress.env('devgoreact'))
    cy.xpath(pageElementLoginPage.forgotPasswordBtn).should('be.visible')
    cy.get(pageElementLoginPage.loginBtn).should('be.visible')
    cy.xpath(pageElementLoginPage.createAccBtn).should('be.visible')
});

Cypress.Commands.add('inputInstructorCredentials', ( email, password) => {
    cy.get(pageElementLoginPage.email).type(email)
    cy.get(pageElementLoginPage.password).type(password)
    cy.get(pageElementLoginPage.loginBtn)
        .should('be.visible')
        .click()
});