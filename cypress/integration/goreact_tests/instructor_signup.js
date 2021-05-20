const { should } = require("chai")

describe('Sign Up for Instructor', function (){
    beforeEach(function () {
        cy.fixture("test-data/instructor.json").as("instructorData").then((instructorData) => {
            this.instructorData = instructorData;
        });

        // cy.fixture("test_data/course.json").as("courseData").then((courseData) => {
        //     this.courseData = courseData;
        // });

        // cy.fixture("test_data/student.json").as("studentData").then((studentData) => {
        //     this.studentData = studentData;
        // });
    });
    it('Account Creation for Instructor', function () {
        cy.goToLoginPage()
        cy.euConfirmation()
        cy.accountCreation(
            this.instructorData.validCredentials.firstName,
            this.instructorData.validCredentials.lastName,
            this.instructorData.validCredentials.phoneNumber,
            this.instructorData.validCredentials.email,
            this.instructorData.validCredentials.password,
            this.instructorData.validCredentials.confirmPassword
        )
        cy.fillingAccountSetup()
    })

})