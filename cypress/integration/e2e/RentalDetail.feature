Feature: Display rental details

    Scenario: I can see rental details page after selecting a desired car
        Given I am on start defult page
          And I select country 'France' and city 'Paris'
          And I type in 'Mazda' in model field
          And I select pick-up date
          And I select drop-off date
          And I press 'Search'
         When I press Rent for selected 'Mazda' car
         Then I am on rental deteails page

    # TODO - add Scenario: Details match selected car and dates from the list
