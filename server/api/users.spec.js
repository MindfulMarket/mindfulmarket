/* global describe beforeEach it */

const { expect } = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')

describe('User routes', () => {
        beforeEach(() => {
            return db.sync({ force: true })
        })

        describe('/api/users/', () => {
                const user = { firstName: 'Bobby', lastName: 'Lux', email: 'Bobby@gmail.com', password: 'boy', phoneNumber: '310-555-5555' }

                beforeEach(() => {
                    return User.create(user)
                })

                xit('GET /api/users', () => {
                    return request(app)
                        .get('/api/users')
                        .expect(200)
                        .then(res => {
                            expect(res.body).to.be.an('array')
                            expect(res.body[0].email).to.be.equal(user.email)
                        })
                })
            }) // end describe('/api/users')
    }) // end describe('User routes')
