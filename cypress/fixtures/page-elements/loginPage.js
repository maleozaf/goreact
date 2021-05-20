export const pageElementLoginPage = {
    email: "[data-cy=login-email-field]",
    password: "[data-cy=login-password-field]",
    forgotPasswordBtn: "//button[text()='FORGOT PASSWORD']", //xpath
    createAccBtn: "//button[text()='Create Account']", //xpath
    loginBtn: "[data-cy=login-button]"
}

export const pageElementForgotPassword = {
    email: "name=user_email",
    cancelBtn: "//button[text()='Cancel']", //xpath
    sendBtn: "//span[text()='Send']", //xpath
    emailSent: "//h4[text()='Password Reset Email Sent']",
    closeBtn: "//span[text()='Close']", //xpath
}