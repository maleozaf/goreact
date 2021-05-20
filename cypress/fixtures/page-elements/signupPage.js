export const pageElementCreateAccount = {
    yesBtn: "[data-cy=eu-confirm-button]",
    noBtn: "[data-cy=us-confirm-button]",
    studentBtn: "[data-cy=stud-sign-up-button]",
    instructorBtn: "[data-cy=ins-sign-up-button]",
    firstnameTxtbox: "#first-name",
    lastNameTxtbox: "#last-name",
    phoneNumberTxtbox: "#phone-number",
    emailTxtbox: "#email",
    passwordTxtbox: "#password",
    confirmPasswordTxtbox: "#confirm-password",
    termsCheckbox: "#terms",
    continueBtn: "button[class='primary-btn'] span",
    firstnameError: "//span[text()='First name is required.']",
    lastnameError: "//span[text()='Last name is required.']",
    emailError: "//span[text()='Email is required.']",
    passwordMismatchError: "//span[text()='Passwords do not match.']"
}

export const pageElementsAccountSetup = {

    orgTypeDropdown: "[name='org_type']",
    personalUse: "//span[text()='Personal Use']",
    trainingTypeDropdown: "[name='use_type']",
    teacherPreparation: "//span[text()='Teacher Preparation']",
    courseFormatDropdown: "[name='course_format']",
    online: "//span[text()='Online']",
    continueBtn: ".primary-btn"
}

export const pageElementCourseInvitationConfirmation = {
    courseName: "//span[text()='']",
    instructorName: "//a[text() = '']"
}