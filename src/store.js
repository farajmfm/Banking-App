import { bankingReducer } from './Reducers/bankingReducer'
import { createStore } from 'redux'

export const store = createStore(bankingReducer)