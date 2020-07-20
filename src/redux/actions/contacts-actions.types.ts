import { Contact } from "../../types/contacts.types";

export const CONTACTS_LOADING = 'CONTACTS_LOADING';
export const CONTACTS_FAIL = 'CONTACTS_FAIL';
export const CONTACTS_SUCCESS = 'CONTACTS_SUCCESS';
export const SELECT_CONTACT = 'SELECT_CONTACT';
export const CONTACTS_NOT_FOUND = 'CONTACTS_NOT_FOUND';

export interface ContactsLoading {
  type: typeof CONTACTS_LOADING
}

export interface ContactsFail {
  type: typeof CONTACTS_FAIL
  payload: any
}

export interface ContactsSuccess {
  type: typeof CONTACTS_SUCCESS,
  payload: Contact[]
}

export interface ContactsSuccess {
  type: typeof CONTACTS_SUCCESS,
  payload: Contact[]
}

export interface SelectContact {
  type: typeof SELECT_CONTACT,
  payload: Contact
}

export interface ContactsNotFound {
  type: typeof CONTACTS_NOT_FOUND,
}

export type ContactsDispatchTypes = ContactsLoading | ContactsFail | ContactsSuccess | SelectContact | ContactsNotFound;