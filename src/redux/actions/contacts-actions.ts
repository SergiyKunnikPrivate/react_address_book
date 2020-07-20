import { Dispatch } from "redux";
import { ContactsDispatchTypes, CONTACTS_SUCCESS, CONTACTS_FAIL, CONTACTS_LOADING, SELECT_CONTACT, CONTACTS_NOT_FOUND } from "./contacts-actions.types";
import { Contact } from "../../types/contacts.types";
import { searchContacts as searchContactsService } from "../../services/contacts.service";

export const searchContacts = (query: string) => async (dispatch: Dispatch<ContactsDispatchTypes>) => {
  try {
    dispatch({
      type: CONTACTS_LOADING
    })
    const contacts: Contact[] = await searchContactsService(query);

    if (!contacts.length) {
      return dispatch({
        type: CONTACTS_NOT_FOUND,
        payload: contacts
      })
    }

    return dispatch({
      type: CONTACTS_SUCCESS,
      payload: contacts
    })

  } catch (error) {
    console.log('error => ', error)
    return dispatch({
      type: CONTACTS_FAIL,
      payload: error
    })
  }
}


export const selectContact = (contact: Contact) => async (dispatch: Dispatch<ContactsDispatchTypes>) => {
  dispatch({
    type: SELECT_CONTACT,
    payload: contact
  })
}