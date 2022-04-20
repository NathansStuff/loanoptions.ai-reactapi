import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootReducer } from './rootReducer'

// middleware
const middleware = [thunk]

export const store = createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(...middleware)))