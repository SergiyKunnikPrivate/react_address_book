import { Contact } from "../../types/contacts.types";
import { ContactsDispatchTypes, CONTACTS_FAIL, CONTACTS_LOADING, CONTACTS_SUCCESS, SELECT_CONTACT, CONTACTS_NOT_FOUND } from "../actions/contacts-actions.types";

interface ContactsStateI {
  loading: boolean;
  contacts: Contact[];
  selected: {
    isSelected: boolean;
    contact?: Contact;
  }
}


const defaultContactsState = {
  loading: true,
  contacts: [],
  selected: {
    isSelected: false
  }
}

const contactsReducer = (state: ContactsStateI = defaultContactsState, action: ContactsDispatchTypes): ContactsStateI => {

  switch (action.type) {
    case CONTACTS_FAIL:
      return {
        loading: false,
        contacts: [],
        selected: {
          isSelected: false
        }
      }
    case CONTACTS_LOADING:
      return {
        loading: true,
        contacts: [],
        selected: {
          isSelected: false
        }
      }
    case CONTACTS_SUCCESS:
      return {
        loading: false,
        contacts: action.payload,
        selected: {
          isSelected: false
        }
      }
    case SELECT_CONTACT:
      return {
        ...state,
        selected: {
          isSelected: true,
          contact: action.payload
        }
      }
    case CONTACTS_NOT_FOUND:
      alert('Contact not found \n Please try again')
      return state;
  }
  return state;
}

export default contactsReducer;