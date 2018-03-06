/* global describe beforeEach afterEach it */

import { expect } from 'chai'
import { fetchReview } from './review'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('review thunk creators', () => {
  let store
  let mockAxios

  const initialState = { review: [] }

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('fetchReview', () => {
    xit('eventually dispatches the GET REVIEWS action', () => {
      const fakeReview = {
        title: 'best shirt',
        rating: 2,
        review: 'this is an awesome shirt'
      }
      mockAxios.onGet('/api/reviews').replyOnce(200, fakeReview)
      return store.dispatch(fetchReview())
        .then(() => {
          const actions = store.getActions()
          expect(actions[0].type).to.be.equal('GET_REVIEWS')
          expect(actions[0].reviews).to.be.deep.equal(fakeReview)
        })
    })
  })

})
