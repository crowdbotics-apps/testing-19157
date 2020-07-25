import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn284236Reducer from '../features/SignIn284236/redux/reducers'
import SignIn284222Reducer from '../features/SignIn284222/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn284236: SignIn284236Reducer,
SignIn284222: SignIn284222Reducer,

});