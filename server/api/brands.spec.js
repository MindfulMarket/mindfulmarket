// /* global describe beforeEach it */

// const { expect } = require('chai')
// const request = require('supertest')
// const db = require('../db')
// const app = require('../index')
// const Brand = db.model('brands')
// const {Products} = require('../db/models')


// describe('brand routes', () => {
//         beforeEach(() => {
//             return db.sync({ force: true })
//         })

//         describe('Get brands and check attributes', () => {
//                 const newBrand = { name: 'Bobby', imageUrl: 'http://lorempixel.com/400/200/',  description: 'brand description' }

//                 beforeEach(() => {
//                     return Brand.create(newBrand)
//                 })

//                 it('GET /api/brands', () => {
//                     return request(app)
//                         .get('/api/brands')
//                         .expect(200)
//                         .then(res => {
//                             expect(res.body).to.be.an('array')
//                             expect(res.body[0].name).to.be.equal(newBrand.name)
//                         })
//                 })

//                 it('GET /api/brands/1', () => {
//                     return request(app)
//                         .get('/api/brands/1')
//                         .expect(200)
//                         .then(res => {
//                             expect(res.body).to.be.an('object')
//                             expect(res.body.name).to.be.equal(newBrand.name)
//                         })
//                 })
                
//             }) // end describe('/api/brands')
//             describe('Check associations', () => {
//                 const newBrand = { name: 'Bobby', imageUrl: 'http://lorempixel.com/400/200/',  description: 'brand description' }
//                 let newProd = {name: 'razor', imgUrl: 'lorempixel', price:30, description:'this is a test product'}

//                 beforeEach(() => {
                  
//                    let  brand = Brand.create(newBrand)
//                    let product = Products.create(newProd)

//                    Promise.all([brand,product])
//                    .then(items => {
//                        items[0].addProduct(items[1].id)
//                    })
//                 })

//                 it('GET /api/brands', () => {
//                     return request(app)
//                         .get('/api/brands')
//                         .expect(200)
//                         .then(res => {
//                             expect(res.body).to.be.an('array')
//                             expect(res.body[0].Products[0]).to.be.equal(newProd)
//                         })
//                 })

//                 // it('GET /api/brands/1', () => {
//                 //     return request(app)
//                 //         .get('/api/brands/1')
//                 //         .expect(200)
//                 //         .then(res => {
//                 //             expect(res.body).to.be.an('object')
//                 //             expect(res.body.name).to.be.equal(newBrand.name)
//                 //         })
//                 // })
                
//             }) // end describe('/api/brands')
//     }) // end describe('brand routes')