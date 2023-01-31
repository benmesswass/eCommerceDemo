Feature: Login Page

    Scenario Outline: login using wrong credentials
        Given I am on the home page
        And I access the login page
        When I enter a username <email>
        And I enter a password <password>
        And I click on the login button
        Then I should have an error message
    Examples:
        | email              | password           |
        | wrongEmail@gmail.com  | correctPassword    |
        | wrongEmail@gmail.com  | wrongPassword      |


    Scenario Outline: login using correct credentials
        Given I am on the home page
        And I access the login page
        When I enter a username <email>
        And I enter a password <password>
        And I click on the login button
        Then I should be logged in with <username> and <email>
    Examples:
        | email                   | password           | username   |
        | correctEmail@gmail.com  | correctPassword    | admin      |

