import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import {
    firstName,
    lastName,
    cardNumber,
    email,
    today
} from '../lib/Generators'
import{
    selects,
    datePickers,
    inputs,
    buttons,
    misc
} from '../lib/Selectors'


function addDays(theDate, days) {
    return new Date(theDate.getTime() + days*24*60*60*1000).toISOString().slice(0, 10);
}

const goToMainPage = () => {
    cy.visit('/')
}

const selectCountry = (country) => {
    cy.get(selects.COUNTRY).select(country)
}

const selectCity = (city) => {
    cy.get(selects.CITY).select(city)
}

const typeModel = (model) => {
    cy.get(inputs.MODEL).type(model)
}

const setPickUpDate = () => {
    cy.get(datePickers.PICKUP).click()
    .type(today)
}

const setInvalidDropOffDate = () => {
    cy.get(datePickers.DROPOFF)
    .type(addDays(new Date(), -5))
}

const pressButton = (name) => {
    cy.get('button').contains(name).click()
}

const emptyFieldsValidation = () => {
    cy.get(misc.SUMMARY_ERROR).eq(0).should('have.text', 'Name is required')
    cy.get(misc.SUMMARY_ERROR).eq(1).should('have.text', 'Last name is required')
    cy.get(misc.SUMMARY_ERROR).eq(2).should('have.text', 'Email is required')
    cy.get(misc.SUMMARY_ERROR).eq(3).should('have.text', 'Card number is required')
}

const wrongValues = () => {
    cy.get(misc.SUMMARY_ERROR).eq(0).should('have.text', 'Name value is too long')
    cy.get(misc.SUMMARY_ERROR).eq(1).should('have.text', 'Last name value is too long')
    cy.get(misc.SUMMARY_ERROR).eq(2).should('have.text', 'Please provide valid email')
    cy.get(misc.SUMMARY_ERROR).eq(3).should('have.text', 'Card number contains wrong chars')
}

const fillData = () => {
    cy.get(inputs.NAME).type(firstName)
    cy.get(inputs.LASTNAME).type(lastName)
    cy.get(inputs.CARD_NUMBER).type(cardNumber)
    cy.get(inputs.EMAIL).type(email)
}

Given('I am on start defult page', () => {
    goToMainPage()
})

When('I type in {string} in model field', (model) =>{
    typeModel(model)
})

When('I select country {string} and city {string}', (country, city) => {
    selectCountry(country)
    selectCity(city)
})

When('I select pick-up date', () => {
    setPickUpDate()
})

When('I select invalid drop-off date',() => {
    setInvalidDropOffDate()
})

When('I press {string}',(name) => {
    pressButton(name)
})

When('I see validation for all empty imput Fields', () => {
    emptyFieldsValidation()
})

When('I enter incorect data in all the imput Fields' ,() =>{
    fillData()
})

When('I press rent! on details screen', () =>{
    cy.get(misc.DETAILS_CARD).within(() =>{
        cy.get(buttons.RENT).contains('Rent!').click()
    })
})

Then('I see validation about incorect values for all of the fields', () => {
    wrongValues()
})

Then('I see validation message to enter valid dates', () =>{
    cy.get(misc.SEARCH_ERROR_FIELD).within(() => {
       cy.get(misc.SEARCH_ERROR).should('have.text' , 'Please enter a valid date!')
    })
    
})