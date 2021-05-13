import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import{
    datePickers,
    misc
} from '../lib/Selectors'


const detailsPage = 'http://qalab.pl.tivixlabs.com/details/'

function addDays(theDate, days) {
    return new Date(theDate.getTime() + days*24*60*60*1000).toISOString().slice(0, 10);
}

const selectDropOffDate = () => {
        cy.get(datePickers.DROPOFF)
        .type(addDays(new Date(), 5))
}

const selectCar = (model) => {
    cy.get(misc.SEARCH_RESULTS).within(() => {
        cy.get('tr').eq('1').within(() => {
            cy.get('td').contains(model)
            .get('td').contains('Rent').click()
        })
     })
}

When('I select drop-off date', () => {
    selectDropOffDate()
})

When('I press Rent for selected {string} car', (model) => {
    selectCar(model)
})

Then('I am on rental deteails page', () => {
    cy.url().should('include', detailsPage)
    cy.get('.card-header').should('contain' , 'Mazda')
})