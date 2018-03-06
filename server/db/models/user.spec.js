/* global describe beforeEach it */

const { expect } = require('chai')
const db = require('../index')
const User = db.model('user')

describe('User model', () => {
        beforeEach(() => {
            return db.sync({ force: true })
        })

        describe('instanceMethods', () => {
                describe('correctPassword', () => {
                        let cody

                        beforeEach(() => {
                            return User.create({
                                    firstName: 'Bobby',
                                    lastName: 'Lux',
                                    email: 'Bobby@gmail.com',
                                    password: 'boy',
                                    phoneNumber: '310-555-5555'
                                })
                                .then(user => {
                                    cody = user
                                })
                        })

                        xit('returns true if the password is correct', () => {
                            expect(cody.correctPassword('boy')).to.be.equal(true)
                        })

                        xit('returns false if the password is incorrect', () => {
                            expect(cody.correctPassword('bonez')).to.be.equal(false)
                        })
                    }) // end describe('correctPassword')
            }) // end describe('instanceMethods')
    }) // end describe('User model')
