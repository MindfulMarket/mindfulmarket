/* global describe beforeEach afterEach it */

import { expect } from 'chai'
import { fetchProducts } from './products'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  let mockAxios

  const initialState = { user: {} }

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('fetchProducts', () => {
    it('eventually dispatches the GET ALL PRODUCTS action', () => {
      const fakeProduct = {
        brand: 'Everlane',
        name: 'The Cropped City Anorak',
        imageUrl: 'https://everlane.imgix.net/i/1dbd43b7_6d8a.jpg?dpr=1&w=1200&h=1200&q=65',
        price: 78,
        brandId: 2,
        description: 'Your perfect transitional layer. This lightweight, cropped take on the anorak has a relaxed shape for easy layering, plus an extendable hood visor, snap closure, and covered pockets. We also treated it with a water-resistant finish for sleek coverage—rain or shine.'
    }
      mockAxios.onGet('/api/products').replyOnce(200, fakeProduct)
      return store.dispatch(fetchProducts())
        .then(() => {
          const actions = store.getActions()
          expect(actions[0].type).to.be.equal('GET_ALL_PRODUCTS')
          expect(actions[0].products).to.be.deep.equal(fakeProduct)
        })
    })
  })

})
