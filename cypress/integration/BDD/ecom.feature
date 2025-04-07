Feature: End to End Ecommerece validation

Scenario: Ecommerce product order
Given I am on Ecommerce Page
When I login to the website
And I add items to cart and checkout
And I validate the total price
Then I select the country submit and verify Thank you
