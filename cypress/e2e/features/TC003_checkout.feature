Feature: checkout Test

    Scenario: checkout a product
        Given I am on the home page
        When I click on the add to cart button
        And I choose the size of the product
        And I add the product to the cart
        And I go to cart
        And I click on proceed to checkout
        And I choose the home delivery option
        And I fill the delivery details
        And I choose a paiement method
        Then I have my order details displayed
        When I confirm my order
        Then the order confirmation message is displayed

