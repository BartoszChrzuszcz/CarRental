Feature: Fields validation

   Scenario: Validatiion is triggered when invalid drop-off date is selected
     Given I am on start defult page
       And I select country 'Poland' and city 'Wroclaw'
       And I type in 'Skoda' in model field
       And I select pick-up date
       And I select invalid drop-off date
      When I press 'Search'
      Then I see validation message to enter valid dates

   Scenario: Validation is triggered for input field  on the summary page
     Given I am on start defult page
       And I select country 'Poland' and city 'Wroclaw'
       And I type in 'Toyota' in model field
       And I select pick-up date
       And I select drop-off date
       And I press 'Search'
       And I press Rent for selected 'Toyota' car
       And I press rent! on details screen
       And I press 'Rent'
       And I see validation for all empty imput Fields
       And I enter incorect data in all the imput Fields
      When I press 'Rent'
      Then I see validation about incorect values for all of the fields


