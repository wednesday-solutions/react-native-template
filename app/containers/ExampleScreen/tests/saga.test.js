/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */

import { takeLatest, call, put } from 'redux-saga/effects'
import { getUser } from 'app/services/UserService'
import { apiResponseGenerator } from 'app/utils/testUtils'
import exampleScreenSaga, { fetchUser } from '../saga'
import { exampleScreenTypes } from '../reducer'

describe('exampleScreenSaga Saga', () => {
  const generator = exampleScreenSaga()

  it('should start task to watch for FETCH_USER action', () => {
    expect(generator.next().value).toEqual(
      takeLatest(exampleScreenTypes.FETCH_USER, fetchUser)
    )
  })

  it('should ensure that the action FETCH_USER_FAILURE is dispatched when the api call fails', () => {
    const method = fetchUser()
    expect(method.next().value).toEqual(
      put({ type: exampleScreenTypes.FETCH_USER_LOADING })
    )
    const res = method.next().value
    expect(res).toEqual(call(getUser))
    expect(method.next(apiResponseGenerator(false)).value).toEqual(
      put({
        type: exampleScreenTypes.FETCH_USER_FAILURE,
        errorMessage: 'There was an error while fetching user informations.'
      })
    )
  })

  it('should ensure that the action FETCH_USER_SUCCESS is dispatched when the api call succeeds', () => {
    const method = fetchUser()
    expect(method.next().value).toEqual(
      put({ type: exampleScreenTypes.FETCH_USER_LOADING })
    )
    const res = method.next().value
    expect(res).toEqual(call(getUser))
    const userResponse = {
      quote: 'Thank you. Come again.',
      character: 'Mohammed Ali Chherawalla',
      image:
        'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629',
      characterDirection: 'Left'
    }
    expect(
      method.next(apiResponseGenerator(true, [userResponse])).value
    ).toEqual(
      put({ type: exampleScreenTypes.FETCH_USER_SUCCESS, user: userResponse })
    )
  })
})
