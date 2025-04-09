Feature: End to End Ecommerece validation
  @Smoke
  Scenario: Ecommerce product order
    Given I am on Ecommerce Page
    When I login to the website
    And I add items to cart and checkout
    And I validate the total price
    Then I select the country submit and verify Thank you

  @regression
  Scenario: Ecommerce product order 2
    Given I am on Ecommerce Page
    When I login to the web portal with username and password
      | username           | password |
      | rahulshettyacademy | learning |
    And I add items to cart and checkout
    And I validate the total price
    Then I select the country submit and verify Thank you
  @Smoke
  Scenario: Ecommerce specific product order
    Given I am on Ecommerce Page
    When I login to the web portal with username and password
      | username           | password |
      | rahulshettyacademy | learning |
    And I add specific item to cart and checkout
      | productName |
      | iphone X    |
    And I validate the total price
    Then I select the country submit and verify Thank you
