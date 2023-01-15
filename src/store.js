import { bankingReducer } from './Reducers/bankingReducer'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(
    bankingReducer, 
    composeWithDevTools()
)