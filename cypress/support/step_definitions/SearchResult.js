import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { misc } from '../lib/Selectors'



Then('I can see a list of results', () => {
        cy.get(misc.SEARCH_RESULTS).should('be.visible')
})