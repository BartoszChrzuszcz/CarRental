import faker from 'faker'

export const today = new Date().toISOString().slice(0, 10)

export const firstName =faker.random.alpha(51)

export const lastName =faker.random.alpha(51)

export const cardNumber = (faker.lorem.word(1) + faker.random.alphaNumeric(20))

export const email = faker.random.alphaNumeric(51)