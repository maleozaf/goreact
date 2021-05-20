describe('Instructor Log In', function (){
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
    it('Correct Credentials: Instructor should be able to log in', function () {
        cy.goToLoginPage()
        cy.inputInstructorCredentials(
            this.instructorData.validCredentials.email,
            this.instructorData.validCredentials.password
        )
    })
})