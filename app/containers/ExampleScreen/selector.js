import { createSelector } from 'reselect'
import _ from 'lodash'
import { initialState } from './reducer'

export const selectExampleDomain = state => state.example || initialState

export const selectLiveInEurope = () =>
  createSelector(
    selectExampleDomain,
    substate =>
      _.includes(
        [
          'Gwenborough',
          'Wisokyburgh',
          'McKenziehaven',
          'South Elvis',
          'Roscoeview'
        ],
        _.get(substate.user, 'address.city', '')
      )
  )

export const selectUser = () =>
  createSelector(
    selectExampleDomain,
    substate => _.get(substate, 'user', null)
  )

export const selectUserIsLoading = () =>
  createSelector(
    selectExampleDomain,
    substate => _.get(substate, 'userIsLoading', null)
  )

export const selectUserErrorMessage = () =>
  createSelector(
    selectExampleDomain,
    substate => _.get(substate, 'userErrorMessage', null)
  )
