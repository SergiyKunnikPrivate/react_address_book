import { combineReducers } from "redux";
import contactsReducer from './contacts-reducer';

const RootReducer = combineReducers({
  contacts: contactsReducer
});


export default RootReducer;