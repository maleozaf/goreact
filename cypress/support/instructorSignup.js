import {pageElementForgotPassword, pageElementLoginPage} from '../fixtures/page-elements/loginPage'
import {pageElementCreateAccount, pageElementsAccountSetup} from '../fixtures/page-elements/signupPage'

Cypress.Commands.add('goToLoginPage', () => {
    cy.visit(Cypress.env('devgoreact'))
    cy.xpath(pageElementLoginPage.forgotPasswordBtn).should('be.visible')
    cy.get(pageElementLoginPage.loginBtn).should('be.visible')
    cy.xpath(pageElementLoginPage.createAccBtn).should('be.visible')
});

Cypress.Commands.add('euConfirmation', () => {
    cy.xpath(pageElementLoginPage.createAccBtn).click()
    cy.get(pageElementCreateAccount.noBtn).click()
    cy.get(pageElementCreateAccount.instructorBtn)
        .should('be.visible')
        .click()
});

Cypress.Commands.add('accountCreation', (firstname, lastname, phoneNum, email,  password, confirmPassword) => {
    cy.get(pageElementCreateAccount.firstnameTxtbox).clear().type(firstname)
    cy.get(pageElementCreateAccount.lastNameTxtbox).clear().type(lastname)
    cy.get(pageElementCreateAccount.phoneNumberTxtbox).clear().type(phoneNum)

    // const randomEmail =
    //     `${firstname}` + `${lastname}`+ Math.floor(Math.random() * 100).toString() + "@gmail.com"

    cy.get(pageElementCreateAccount.emailTxtbox).clear().type(email)
    cy.get(pageElementCreateAccount.passwordTxtbox).clear().type(password)
    cy.get(pageElementCreateAccount.confirmPasswordTxtbox).clear().type(confirmPassword)
    cy.get(pageElementCreateAccount.termsCheckbox).click()
    cy.get(pageElementCreateAccount.continueBtn)
        .should('be.visible')
        .click()
});

Cypress.Commands.add('fillingAccountSetup', () => {
    cy.get(pageElementsAccountSetup.orgTypeDropdown).click()
    cy.xpath(pageElementsAccountSetup.personalUse).click()
    cy.get(pageElementsAccountSetup.trainingTypeDropdown).click()
    cy.xpath(pageElementsAccountSetup.teacherPreparation).click()
    cy.get(pageElementsAccountSetup.courseFormatDropdown).click()
    cy.xpath(pageElementsAccountSetup.online).click()
    cy.get(pageElementsAccountSetup.continueBtn)
        .should('be.visible')
        .click()
});