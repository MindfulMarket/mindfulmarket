/* global describe beforeEach it */

const { expect } = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Brand = db.model('brands')

describe('brand routes', () => {
        beforeEach(() => {
            return db.sync({ force: true })
        })

        describe('Get brands and check attributes', () => {
                const newBrand = { name: 'Bobby', imageUrl: 'http://lorempixel.com/400/200/',  description: 'brand description' }

                beforeEach(() => {
                    return Brand.create(newBrand)
                })

                it('GET /api/brands', () => {
                    return request(app)
                        .get('/api/brands')
                        .expect(200)
                        .then(res => {
                            expect(res.body).to.be.an('array')
                            expect(res.body[0].name).to.be.equal(newBrand.name)
                            expect(res.body[0].brandId).to.be.equal(undefined)
                        })
                })
                
            }) // end describe('/api/brands')
    }) // end describe('brand routes')