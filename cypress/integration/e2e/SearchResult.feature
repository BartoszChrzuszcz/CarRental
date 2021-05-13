Feature: Display search results

    Scenario: I can see search reasult page after filling form and pressing search 
        Given I am on start defult page
          And I select country 'France' and city 'Paris'
          And I type in 'Mazda' in model field
          And I select pick-up date
          And I select drop-off date
         When I press 'Search'
         Then I can see a list of results


    # TODO - add Scenario: I can see that data in list match search criteria