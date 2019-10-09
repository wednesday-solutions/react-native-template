import { createActions } from 'reduxsauce'

export const { Types: AppTypes, Creators: AppActions } = createActions({
  // This action is triggered when the application starts
  startup: null
})
