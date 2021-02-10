import { combineReducers }from 'redux'

import incompleteItems from './incompleteItems'
import completeItems from './completeItem'
import inputIncomplete from './inputIncomplete'

const rootReducer = combineReducers({
    incompleteItems,
    completeItems,
    inputIncomplete
})

export default rootReducer;