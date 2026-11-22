@sep19
Feature: Click on the next button on step 1

    As a customer, I should be able to click on the next button on step 1 when I give valid information.

    #* AC1: The next button should take customers to step 2 when given valid information.
    #*              a. Test by providing all fields
    #*              b. Test by providing only the required fields

    Background:
        Given user is on the enrollment page

    @sep19-1
    Scenario Outline: Next button takes the customer to step 2 with valid details
        When customer provides "<field_set>" personal details
        And customer clicks the Next button
        Then customer should be taken to step 2

        Examples:
            | field_set       |
            | all fields      |
            | required fields |